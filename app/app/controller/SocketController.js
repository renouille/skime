/**
 * Controller to manage the connection and events with the websockets:
 * -- User checkin
 * -- Friend checkin notification
 * -- User & Friend position update
 * -- Create meeting point
 * -- Meeting Point notification
 * 
 * @author René Grossmann
 */

Ext.define("skiMe.controller.SocketController", {
	extend: "Ext.app.Controller",
    socket: null,

    /**
     * Set up the connection between the application and the websockets server and define the event handlers
     */
    setConnection: function() {
        this.socket = io.connect('http://10.192.81.72', {port: 8000, transports: ["websocket"]});
        this.setEventHandlers();
    },

    /**
     * Define the event handlers
     */
    setEventHandlers: function() {

        var socketController = this;

        // Socket connection
        this.socket.on('socketReady', function(socketData) {
            socketController.onSocketReady(socketData);
        });

        // Connected friends
        this.socket.on('connectedFriends', function(friendsData) {
            socketController.onConnectedFriends(friendsData);
        });

        //Friend disconnection 
        this.socket.on('friendDisconnect', function(friendData) {
            socketController.onFriendDisconnect(friendData);
        });

        //Checkin of a friend
        this.socket.on('friendCheckin', function(checkinData) {
            socketController.onFriendCheckin(checkinData);
        });

        //Position update of a friend
        this.socket.on('friendPositionUpdate', function(positionData) {
            socketController.onFriendPositionUpdate(positionData);
        });

        //New Friend meeting point 
        this.socket.on('newMeetingPoint', function(meetingPointData) {
            socketController.onNewMeetingPoint(meetingPointData);
        });
    },

    /**
     * Notify the websockets server the user checkedin
     * Data sent: CheckinId and LatLng position
     */
    userCheckin: function() {

        var checkin = skiMe.app.user.getCheckin();
        var position = Ext.JSON.decode(checkin.get('position'));
        
        this.socket.emit("userCheckin", {checkinId: checkin.getId(), lat: position['lat'], lng: position['lng']});
    },

    /**
     * Notify the websockets server the user updated his positon
     * Data sent: LatLng position
     * Note: Sent at every update position event from Leaflet
     * @param {LatLng} position New position of the user
     */
    userPositionUpdate: function(position) {

        this.socket.emit('userPositionUpdate', {lat: position.getLatitude(), lng: position.getLongitude()});
    },

    /**
     * Notify the websockets server that a Meeting Point has been created and a friend added to it
     * Data sent: meetingPointId and friendId
     * Note: Sent for each member of the Meeting Point
     * @param {Ext.model.MeetingPoint} meetingPoint Meeting Point created
     * @param {Ext.model.User}         friend       Friend member of the Meeting Point
     */
    newMeetingPointNotification: function(meetingPoint, friend) {

        this.socket.emit('newMeetingPointNotification', {meetingPointId: meetingPoint.getId(), friendId: friend.getId()});
    },

    /**
     * Send to the websockets server the user informations
     * Data sent: UserId and an array of friendId
     * Note: Sent when the connection between the server and the client is set up
     * @param {Object} socketData Data of the socket connection - socketId
     */
    onSocketReady: function(socketData) {

        var friendsIdArray = Array();

        Ext.getStore('friendStore').each(function(friend) {
            friendsIdArray.push(friend.getId());
        });

        this.socket.emit('userConnect', {id: skiMe.app.user.getId(), friends: friendsIdArray})
        console.log("Connected to socket server");
    },

    /**
     * Create a marker on the map for each of the friend connected
     * Note: A connected friend is a user which is connected to the websockets server and has checked in
     * @param {Object} friendsData List of friends id
     */
    onConnectedFriends: function(friendsData) {

        //For each friend id
        for(var key in friendsData) {

            var friend = Ext.getStore('friendStore').getById(key);
            this.getApplication().getController('MapController').addFriendMarker(friend, friendsData[key], true);
            console.log(friend.get('name')+' is connected');
        }
    },

    /**
     * Modify the actual friend marker on the map to a 'disconnected' marker (color red)
     * Note: Only called if the disconnected friend previously checked in
     * @param {Object} friendData Friend disconnected - friendId
     */
    onFriendDisconnect: function(friendData) {

        var friend = Ext.getStore('friendStore').getById(friendData.friendId);

        this.getApplication().getController('MapController').addFriendMarker(friend, friendData.position, false);

        console.log('Friend '+friend.get('name')+' disconnected');
    },

    /**
     * Load the friends checkin corresponding to id and add it to the map
     * @param {Object} checkinData Data of the checkin - friendId, position
     */
    onFriendCheckin: function(checkinData) {

        var socketController = this;
        var friend = Ext.getStore('friendStore').getById(checkinData.friendId);

        skiMe.model.Checkin.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Load the checkin corresponding to the id
        skiMe.model.Checkin.load(checkinData.checkinId, {
            success: function(checkin) {
                friend.setCheckin(checkin);
                socketController.getApplication().getController('MapController').addFriendMarker(friend, checkinData.position, true);
            },
            failure: function(checkin) {
                console.log("Oops, something went wrong...");
            }
        })

        console.log('Friend '+friend.get('name')+' checked in at lat: '+checkinData.position.lat+' - lng: '+checkinData.position.lng);
    },

    /**
     * Modify the position the friends marker on the map
     * @param {Object} positionData Data of the friends position - friendId, position
     */
    onFriendPositionUpdate: function(positionData) {
        var friend = Ext.getStore('friendStore').getById(positionData.friendId);

        this.getApplication().getController('MapController').updateFriendPosition(friend, positionData.position);

        console.log(friend.get('name')+' updated his location to lat: '+positionData.position.lat+' - lng: '+positionData.position.lng);
    },

    /**
     * Load the new Meeting Point corresponding to the id, add it to the store and add a marker on the map
     * @param  {Object} meetingPointData Data of the new Meeting Point - meetingPointId
     */
    onNewMeetingPoint: function(meetingPointData) {

        var socketController = this;
        skiMe.model.MeetingPoint.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        skiMe.model.MeetingPoint.load(meetingPointData.meetingPointId, {
            success: function(meetingPoint) {

                Ext.getStore('meetingPointStore').add(meetingPoint);
                socketController.getApplication().getController('MapController').addMeetingPoint(meetingPoint);

                console.log(meetingPoint.getEvent().getUser().get('name')+' created a new meeting point');
            },
            failure: function(meetingPoint) {
                console.log('Oops, something went wrong...');
            }
        })
    }
});