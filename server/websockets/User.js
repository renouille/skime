var dejavu = require('dejavu');

exports.init = function() {
    dejavu.Class.declare({

        $name: 'User',

        __id: null,
        __socketId: null,
        __longitude: null,
        __latitude: null,
        __friends: null,
        __checkedIn: null,
        __connectTime: null,

        initialize: function(socketId, id, friends) {
            this.__socketId = socketId;
            this.__id = id;
            this.__friends = friends;
            this.__checkedIn = false;
            this.__connectTime = Date.now();
        },

        getId: function() {
            return this.__id;
        },

        getSocketId: function() {
            return this.__socketId;
        },

        getFriends: function() {
            return this.__friends;
        },

        getConnectTime: function() {
            return this.__connectTime;
        },

        setLongitude: function(lng) {
            this.__longitude = lng;
        },

        getLongitude: function() {
            return this.__longitude;
        },

        setLatitude: function(lat) {
            this.__latitude = lat;
        },

        getLatitude: function() {
            return this.__latitude;
        },

        setCheckedIn: function(bool) {
            this.__checkedIn = bool;
            return this.__checkedIn;
        },

        getCheckedIn: function() {
            return this.__checkedIn;
        }
    });

}