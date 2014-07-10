/**
 * Websockets server of the skiMe application
 * Manage the connections of the users and his friends, the position updates and the notifications
 *
 * @author René Grossmann
 */

var util = require('util');
var socketIO = require('socket.io');
var dejavu = require('dejavu');
var users;

/**
 * Initialize the server and the sockets
 */
function init() {
    util.log('Server up and running');

    users = {};

    io = socketIO.listen(8000);

    io.configure(function() {
        io.set('transports', ['websocket']);
        io.set('log level', 2);
    });

    //When a new socket start a connection with the server
    io.sockets.on('connection', onSocketConnect);
}

/**
 * When a new socket connection is set up, define the events handlers and notify the client the socket is ready
 * @param  {Socket} socket Socket connected to the server
 */
function onSocketConnect(socket) {

    util.log('Socket is connected: '+socket.id);

    //Sock is ready, client can send his data
    socket.emit('socketReady', {socketId: socket.id});

    //Socket eventhandlers
    socket.on('disconnect', onSocketDisconnect);
    socket.on('userConnect', onUserConnect);
    socket.on('userCheckin', onUserCheckin);
    socket.on('userPositionUpdate', onUserPositionUpdate);
    socket.on('newMeetingPointNotification', onNewMeetingPointNotification);
}

/**
 * Notify all the friends of the disconnected client the user is no longer connected
 */
function onSocketDisconnect() {

    var user = getUserBySocketId(this.id);

    if(user != false) {

        user.getFriends().forEach(function(friend) {
            
            if(friend in users) {
                util.log('Disconnection notification sent to '+friend+' - '+users[friend].getSocketId());
                var friendPosition = {lat: user.getLatitude(), lng: user.getLongitude()};
                io.sockets.socket(users[friend].getSocketId()).emit('friendDisconnect', { friendId: user.getId(), position: friendPosition });
            }
        });

        delete users[user.getId()];

        util.log('Client '+user.getId()+' is disconnected - '+this.id);
    } else {
        util.log('Client disconnected untimely');
    }
}

/**
 * Create a new User and put it in the connected users array. Notify the user which of his friends is connected
 * @param {JSON} userData Data of the User to create
 */
function onUserConnect(userData) {

    var user = new User(this.id, userData.id, userData.friends);
    users[userData.id] = user;

    var connectedFriends = {};
    userData.friends.forEach(function(friend) {

        if(friend in users) {
            if(users[friend].getCheckedIn()) {
                connectedFriends[friend] = {lat: users[friend].getLatitude(), lng: users[friend].getLongitude()};
            }
        }
    });

    this.emit('connectedFriends', connectedFriends);

    util.log('User '+user.getId()+' created');
}

/**
 * Defines the latitude and longitude of the corresponding User and notify the connected friends of the User
 * @param {JSON} checkinData Data of the checkin
 */
function onUserCheckin(checkinData) {

    var user = getUserBySocketId(this.id);
    
    if(user != false) {
        user.setCheckedIn(true);
        user.setLatitude(checkinData.lat);
        user.setLongitude(checkinData.lng);

        user.getFriends().forEach(function(friend) {
            
            if(users[friend] != null) {
                util.log('Checkin notification sent to '+friend+' - '+users[friend].getSocketId());
                var position = {lat: user.getLatitude(), lng: user.getLongitude()};
                io.sockets.socket(users[friend].getSocketId()).emit('friendCheckin', { friendId: user.getId(), checkinId: checkinData.checkinId, position: position });
            }
        });
    } else {
        util.log('Client disconnected untimely');
    }
}

/**
 * Update the latitude and the longitude of the corresponding User and notify his connected friends he changed position
 * @param {JSON} positionData Data of the new position
 */
function onUserPositionUpdate(positionData) {
    var user = getUserBySocketId(this.id);

    if(user != false) {

        if(user.getCheckedIn()) {
            user.setLatitude(positionData.lat);
            user.setLongitude(positionData.lng);

            user.getFriends().forEach(function(friend) {
                
                if(users[friend] != null) {
                    util.log('Update position notification sent to '+friend+' - '+users[friend].getSocketId());
                    var position = {lat: user.getLatitude(), lng: user.getLongitude()};
                    io.sockets.socket(users[friend].getSocketId()).emit('friendPositionUpdate', { friendId: user.getId(), position: position });
                }
            });
        }
    } else {
        util.log('Client disconnected untimely');
    }
}

/**
 * Notify the corresponding User of a new Meeting Point creation
 * @param {JSON} notificationData Data of the Meeting Point notification
 */
function onNewMeetingPointNotification(notificationData) {
    
    var friendId = notificationData.friendId;

    if(friendId in users) {
       io.sockets.socket(users[friendId].getSocketId()).emit('newMeetingPoint', { meetingPointId: notificationData.meetingPointId });
       util.log("Meeting point notification sent to "+friendId);
    }
}

/**
 * Find the User corresponding to the Socket id
 * @param  {string} socketId Id of the socket
 * @return {User}   User corresponding - False if not found
 */
function getUserBySocketId(socketId) {

    var userFound = false

    for(var key in users) {
      if(users[key].getSocketId() == socketId) {
            userFound = users[key];
        }
    }

    return userFound;
}

//Server initialization
init();

/**
 * Class simulating a User with an id, a socket id, a position [lat+lng], an array of friends id, the connection time
 *
 * @author René Grosmann
 */
var User = dejavu.Class.declare({

    $name: 'User',

    __id: null,
    __socketId: null,
    __longitude: null,
    __latitude: null,
    __friends: null,
    __checkedIn: null,
    __connectTime: null,

    /**
     * Create a User with a socket id, an id and an array of friends and defines the connection time
     * @param  {string} socketId Id of the socket associated to the User
     * @param  {int}    id       Id of the User
     * @param  {array}  friends  Id of the friends of the User
     */
    initialize: function(socketId, id, friends) {
        this.__socketId = socketId;
        this.__id = id;
        this.__friends = friends;
        this.__checkedIn = false;
        this.__connectTime = Date.now();
    },

    /**
     * Get the User id
     * @return {int} Id of the User
     */
    getId: function() {
        return this.__id;
    },

    /**
     * Get the Socket id
     * @return {string} Id of the socket of the User
     */
    getSocketId: function() {
        return this.__socketId;
    },

    /**
     * Get the friends of the User
     * @return {array} Ids of the friends of the User
     */
    getFriends: function() {
        return this.__friends;
    },

    /**
     * Get the connection time of the User
     * @return {date} Connection time of the User
     */
    getConnectTime: function() {
        return this.__connectTime;
    },

    /**
     * Set the longitude of the last checkin of the User
     * @param {float} lng Longitude of checkin
     */
    setLongitude: function(lng) {
        this.__longitude = lng;
    },

    /**
     * Get the longitude of the last checkin of the User
     * @return {float} Longitude of the checkin
     */
    getLongitude: function() {
        return this.__longitude;
    },

    /**
     * Set the latitude of the last checkin of the User
     * @param {float} lat Latitude of the checkin
     */
    setLatitude: function(lat) {
        this.__latitude = lat;
    },

    /**
     * Get the latitude of the last checkin of the User
     * @return {float} Latitude of the checkin
     */
    getLatitude: function() {
        return this.__latitude;
    },

    /**
     * Define if the User checked in during this session
     * @param  {boolean} bool Value of the property - True if he checked in, false if he checked out
     */
    setCheckedIn: function(bool) {
        this.__checkedIn = bool;
    }, 

    /**
     * Returns true if the User checked in during this session
     * @return {boolean} Checkedin property
     */
    getCheckedIn: function() {
        return this.__checkedIn;
    }
});