/**
 * Controller of the Map features:
 * -- Show pistes/lifts
 * -- Show MeetingPoints markers
 * -- Show Checkins markers
 *
 * @author René Grossmann
 */

Ext.define("skiMe.controller.MapController", {
	extend: "Ext.app.Controller",

	config: {
		refs: {
			leafletmap: 'leafletmap',
            mapPanel: 'mapPanel'
		},

		control: {
			leafletmap: {
                updatePosition: 'onUpdatePosition'
	        }
		},
        friendsMarkers: {}
	},

    /**
     * Inform the websockets that the user position has been updated
     * Called when the user position is updated
     * @param {LatLng} position Leaflet LatLng object of the user position
     */
    onUpdatePosition: function(position) {
        this.getApplication().getController('SocketController').userPositionUpdate(position);
    },

    /**
     * Unmask the application and show all the data when all data have been loaded
     */
    showData: function() {
        
        var mapController = this;
        var now = new Date();


        //Show pistes
        Ext.getStore('pisteStore').each(function(piste) {

            mapController.getLeafletmap().addPiste(Ext.JSON.decode(piste.get('geojson')));
        });

        //Show Lifts
        Ext.getStore('liftStore').each(function(lift) {

            mapController.getLeafletmap().addLift(Ext.JSON.decode(lift.get('geojson')));
        });

        //Show Meetin Points
        Ext.getStore('meetingPointStore').each(function(mp) {
            
            //If the meeting point time is outdated by 4 hours, then do not show it and set it as not active
            var mpDate = new Date(mp.get('timestamp')*1000);
            mpDate.setHours(mpDate.getHours()+2);

            if(now <= mpDate) {
                mapController.addMeetingPoint(mp);
            } else {
                mp.set('isactive', "false");
            }
        });

        Ext.getStore('meetingPointStore').sync();

        //Show last connected friends
        Ext.getStore('friendStore').each(function(friend) {

            if(friend.checkin != null) {

                var event = friend.getCheckin().getEvent();
                var checkinTime = new Date(event.get('timestamp')*1000);

                //If checkin time is outdated by less than 2 hours, than show it
                checkinTime.setHours(checkinTime.getHours()+2);

                if(now <= checkinTime) {
                    var position = Ext.JSON.decode(friend.getCheckin().get('position'));
                    mapController.addFriendMarker(friend, position, false);
                }
            }
        });

        //Show resorts webcams
        Ext.getStore('resortStore').each(function(resort) {
            resort.webcams().each(function(webcam) {
                mapController.addWebcam(webcam, resort.webcams());
            });
        });

        this.getMapPanel().setMasked(false);
        
    },

    /**
     * Add the created Meeting Point on the map and set the information to display
     * @param {Ext.model.MeetingPoint} meetingPoint Meeting Point to add on the map
     */
    addMeetingPoint: function(meetingPoint) {
        
        var mpDate = new Date(meetingPoint.get('timestamp')*1000);
        var mpPosition = Ext.JSON.decode(meetingPoint.get('position'));
        var mpOwner = meetingPoint.getEvent().getUser().get('name');
        var mpComments = meetingPoint.get('comments');

        //Format the date
        var mpYear = mpDate.getFullYear();
        var mpMonth = mpDate.getMonth().pad(2);
        var mpDay = mpDate.getDate().pad(2);
        var mpHour = mpDate.getHours().pad(2);
        var mpMin = mpDate.getMinutes().pad(2);
        var formattedTime = mpHour+':'+mpMin;
        var formattedDate = mpDay+'.'+mpMonth+'.'+mpYear;

        //Create the marker
        this.getLeafletmap().addMeetingPoint(mpPosition, mpOwner, mpComments, formattedDate, formattedTime);
    },

    /**
     * Add the Checkin of the user on the map
     * @return {LatLng} Latitude and Longitude of the user
     */
    addUserMarker: function() {

        var profilePicture = skiMe.config.Config.getSkimeUrl()+skiMe.app.user.getProfilePicture().get('url_thumbnail');

        //Create the marker with the user profile picture
        return this.getLeafletmap().addOwnPositionMarker(profilePicture);
    },

    /**
     * Add the position of the Friend on the map
     * @param {Ext.model.User} friend         Friend to add on the map
     * @param {Object}         friendPosition Latitude and Longitude of the friend
     * @param {boolean}        connected      True if the friend is connected, false if not (fix the color of the marker)
     */
    addFriendMarker: function(friend, friendPosition, connected) {

        //If the Friend has already a marker on the map, delete it
        var friendsMarkers = this.getFriendsMarkers();
        if(friend.getId() in friendsMarkers) {
            var marker = friendsMarkers[friend.getId()];
            this.getLeafletmap().removeFriendMarker(marker);
        }

        var friendName = friend.get('name');
        var friendPicture = skiMe.config.Config.getSkimeUrl()+friend.getProfilePicture().get('url_thumbnail');
        var markerColor = null;

        //Select the color of the marker - Green if connected, red if not
        if(connected) {
            markerColor = 'green';
        } else {
            markerColor = 'red';
        }

        //Create the marker and add it to the associative array of friends and markers
        var friendMarker = this.getLeafletmap().addFriendMarker(friendPosition, friendName, friendPicture, markerColor);
        friendsMarkers[friend.getId()] = friendMarker;
    },

    /**
     * Update the position of the marker corresponding to the friend
     * @param {Ext.model.User} friend         Friend to update the position
     * @param {Object}         friendPosition New Latitude and Longitude of the Friend
     */
    updateFriendPosition: function(friend, friendPosition) {
        var friendsMarkers = this.getFriendsMarkers();

        if(friend.getId() in friendsMarkers) {
            var marker = friendsMarkers[friend.getId()];

            marker.setLatLng(friendPosition);
            console.log("marker updated");
        }
    },

    /**
     * Add a webcam of a resort on the map
     * @param {Webcam} Webcam to add on the map
     */
    addWebcam: function(webcam, allWebcams) {

        var mapController = this;
        var position = Ext.JSON.decode(webcam.get('position'));
        var webcamMarker = this.getLeafletmap().addWebcam(position);

        webcamMarker.on('click', function(event) {

            // Create the Gallery Carousel
            var galleryCarousel = Ext.Viewport.add({
                xtype: 'imageCarousel',
                images: allWebcams
            });

            // Set the clicked image container as the active item of the carousel
            galleryCarousel.setActiveItem(allWebcams.indexOf(webcam));
            galleryCarousel.down('#carouselTitlebar').setTitle(allWebcams.indexOf(webcam)+1 + ' of ' + allWebcams.getAllCount());

            // Show the carousel
            galleryCarousel.show();
        });
    }
});