/**
 * Controller of the main features:
 * -- Checkins
 * -- MeetingPoints
 * -- Groups
 * -- User & Friend profiles
 * -- User status
 *
 * @author René Grossmann
 */

Ext.define("skiMe.controller.MainController", {
	extend: "Ext.app.Controller",

	config: {
		refs: {
            mapPanel: 'mapPanel',
			leafletmap: 'leafletmap',
            pathMenu: 'pathmenu',
            timePickerField: 'timepickerfield',
            meetingPointForm: 'meetingPointForm',
            addFriendPanel: 'addFriendPanel',
            addFriendList: 'addFriendPanel #addFriendList',
            addGroupPanel: 'addGroupPanel',
            addGroupList: 'addGroupPanel #addGroupList',
            addedFriendList: 'addedFriendList',
            addedGroupList: 'addedGroupList',
            friendsPanel: 'friendsPanel',
            friendsPanelList: 'friendsPanel #friendsPanelList',
            friendsPanelGroupList: 'friendsPanel #friendsPanelGroupList',
            userProfile: 'userProfile',
            groupForm: 'groupForm',
            groupProfile: 'groupProfile',
            statusForm: 'statusForm'
		},
		control: {
            leafletmap: {
                meetingPointBtnTap: 'openMeetingPointForm'
            },
            pathMenu: {
                checkinTap: 'createCheckin',
                newGroupTap: 'openGroupForm',
                statusTap: 'openStatusForm',
            },
            meetingPointForm: {
                mpCreateBtnTap: 'createMeetingPoint',
                mpBackBtnTap: 'closeMeetingPoint',
                mpAddFriendBtnTap: 'openAddFriendPanel',
                mpAddGroupBtnTap: 'openAddGroupPanel',
            },
            addFriendPanel: {
               addFriendPanelCloseBtnTap: 'closeAddFriendPanel'
            },
            addGroupPanel: {
               addGroupPanelCloseBtnTap: 'closeAddGroupPanel'
            },
            addFriendList: {
                itemsingletap: 'addFriendToAction'
            },
            addGroupList: {
                itemsingletap: 'addGroupToAction'
            },
            friendsPanel: {
                userInfoItemTap: 'openProfileUser',
                userSearchBtnTap: 'openSearchPanel'
            },
            friendsPanelList: {
                itemsingletap: 'openProfileFriend'
            },
            friendsPanelGroupList: {
                itemsingletap: 'openGroupProfile'
            },
            userProfile: {
                upBackBtnTap: 'closeUserProfile'
            },
            groupForm: {
                grpCreateBtnTap: 'createGroup',
                grpBackBtnTap: 'closeGroupForm',
                grpAddFriendBtnTap: 'openAddFriendPanel'
            },
            groupProfile: {
                groupProfileCloseBtnTap : 'closeGroupProfile'
            },
            statusForm: {
                statusUpdateBtnTap: 'updateStatus',
                statusBackBtnTap: 'closeStatusForm'
            }
		}
	},

    ////////////////////////////////////////////////////// CHECKIN /////////////////////////////////////////////////////////////////
    
    /**
     * Create a new checkin:
     * Display the user marker on map and get his position.
     * If no error while getting his position, create a new event and a new checkin.
     * Save the event and the checkin, notify the websockets about the new checkin.
     */
    createCheckin: function() {
        console.log("Check-in");

        var mainController = this;
        var map = this.getLeafletmap();

        //Get users position
        map.setEnableOwnPositionMarker(true);
        var latlng = this.getApplication().getController('MapController').addUserMarker();

        if(latlng != null) {

            //Event creation
            var event = Ext.create('skiMe.model.Event', {
                timestamp: Math.round(Date.now() / 1000),
                eventtype_id: 1 //User checkin
            });
            event.setUser(skiMe.app.user);
            event.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

            //Checkin creation
            var checkin = Ext.create('skiMe.model.Checkin', {
                position: '{"lat":'+latlng.getLatitude()+', "lng":'+latlng.getLongitude()+'}',
            });
            checkin.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
            
            //Event saving
            event.save({
                success: function(event, op) {

                    checkin.setEvent(event);

                    //Checkin saving
                    checkin.save({
                        success: function(checkin, op) {
                            console.log("checkedin.");
                            console.log(checkin);
                            //Replace the old checkin by the new one
                            skiMe.app.user.setCheckin(checkin);
                            
                            //Create a notification for each friend
                            Ext.getStore('friendStore').each(function(friend) {

                                //Creation of the notification
                                var notification = Ext.create('skiMe.model.UserNotification', {
                                    isRead: false
                                });
                                notification.setUser(friend);
                                notification.setEvent(event);
                                notification.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                                //Notification saving
                                notification.save({
                                    success: function(notification, op) {
                                        console.log("Notification sent to "+friend.get('name'));
                                    },
                                    failure: function(notification, op) {
                                        console.log("Unable to send notification to "+friend.get('name'));
                                    }                      
                                });
                            });

                            //Notify the websockets about the new Checkin
                            mainController.getApplication().getController('SocketController').userCheckin();
                        },
                        failure: function(checkin, op) {
                            mainController.requestFailure('Unable to create checkin.');
                        }
                    });
                },
                failure: function(event, op) {
                    mainController.requestFailure('Unable to create checkin.');
                }
            });
        } else {
            this.requestFailure('Unable to detect your position.');
        }
    },

    //////////////////////////////////////////////////// MEETING POINT /////////////////////////////////////////////////////////////////////////////////////////
    
    /**
     * Open the form to create a new Meeting Point
     */
    openMeetingPointForm: function() {
        Ext.Viewport.add({xtype: 'meetingPointForm'}).show();

        this.getTimePickerField().setValue(new Date());
    },

    /**
     * Create a new Meeting Point:
     * Create a new event and a new MeetingPoint and save them.
     * If no error get the members of the Meeting Point and create/save a new notification for each of them.
     * Notify the websockets about the new Meeting Point.
     */
    createMeetingPoint: function() {

        var mainController = this;
        var mpForm = this.getMeetingPointForm();
        var mpValues = mpForm.getValues();
        var clickedLatLng = this.getLeafletmap().getClickedLatLng();

        //Event creation
        var event = Ext.create('skiMe.model.Event', {
            timestamp: Math.round(Date.now() / 1000),
            eventtype_id: 3 //Create meeting point
        });
        event.setUser(skiMe.app.user);
        event.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Meeting point creation
        var meetingPoint = Ext.create('skiMe.model.MeetingPoint', {
            timestamp: new Date(mpValues.meetingTime)/1000,
            position: '{"lat":'+clickedLatLng.lat+', "lng":'+clickedLatLng.lng+'}',
            isactive: true,
            comments: mpValues.meetingPointComment
        });
        meetingPoint.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Event saving
        event.save({
            success: function(event, op) {

                meetingPoint.setEvent(event);

                //MeetingPoint saving
                meetingPoint.save({
                    success: function(mp, op) {

                        //Display confirmation message and add a marker on the map
                        mainController.requestSuccess('Meeting point created !');
                        mainController.getApplication().getController('MapController').addMeetingPoint(meetingPoint);

                        var meetingPointMembers = [];

                        //If the user selected a group, put all the members of the group in an array, else put all the selected friends.
                        if(Ext.getStore('addedFriendStore').getCount() == 0) {

                            Ext.getStore('addedGroupStore').each(function(group) {

                                group.members().each(function(member) {
                                    meetingPointMembers.push(member);
                                });
                            });

                            Ext.getStore('addedGroupStore').removeAll();
                        } else {

                            Ext.getStore('addedFriendStore').each(function(friend) {
                                meetingPointMembers.push(friend);
                            });

                            Ext.getStore('addedFriendStore').removeAll();
                        }

                        //Create a notification for each member
                        meetingPointMembers.forEach(function(member) {

                            //Notification creation
                            var notification = Ext.create('skiMe.model.UserNotification', {
                                isRead: false
                            });
                            notification.setUser(member);
                            notification.setEvent(event)
                            notification.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                            //Notification saving
                            notification.save({
                                success: function(notif, op) {

                                    mainController.getApplication().getController('SocketController').newMeetingPointNotification(meetingPoint, member);
                                    console.log("Notification sent to "+member.get('name'));
                                },
                                failure: function(notif, op) {
                                    mainController.requestFailure("Unable to send notification to "+member.get('name'));
                                }                            
                            });
                        });
                    },
                    failure: function(mp, op) {
                        mainController.requestFailure("Meeting point creation failed. Please try again later.");
                    }
                });
            },
            failure: function(event, op) {
                mainController.requestFailure("Meeting point creation failed. Please try again later.");
            }
        });
        
        //destroy the form 
        //Note: Cannot close throught the closeMeetingPoint methode because the AddedFriendStore is still used in async task
        this.getMeetingPointForm().hide();
        this.getMeetingPointForm().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Close the Meeting Point creation form and delete all added friends in the store
     */
    closeMeetingPoint: function() {

        Ext.getStore('addedFriendStore').removeAll();
        Ext.getStore('addedGroupStore').removeAll();

        this.getMeetingPointForm().hide();
        this.getMeetingPointForm().onAfter('hide', function() {
            this.destroy();
        });

        console.log('Meeting point canceled');
    },

    //////////////////////////////////////////// ADDED FRIEND & GROUP LIST //////////////////////////////////////////////////////
    
    /**
     * Open the Friend selection panel
     */
    openAddFriendPanel: function() {
        Ext.Viewport.add({xtype: 'addFriendPanel'}).show();
    },

    /**
     * Close the Friend selection panel 
     */
    closeAddFriendPanel: function() {

        this.getAddFriendPanel().hide();

        this.getAddFriendPanel().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Add a Friend to the store of added Friends after a single tap and close the Friend selection panel
     * @param {Ext.dataview.DataView} list   List of friends
     * @param {int}                   index  Index of the Friend in the list
     * @param {Ext.Element}           target Friend single tapped
     * @param {Ext.data.Model}        record Model instance associated to the item
     * @param {Ext.EventObject}       e      Event  object
     * @param {Object}                eOpts  Options of the event
     */
    addFriendToAction: function(list, index,arget, record, e, eOpts){

       var addedFriendStore = Ext.getStore('addedFriendStore');
        
        if(addedFriendStore.getById(record.data.id) == undefined) {
            addedFriendStore.add(record);

            this.getAddedFriendList().increaseAddedFriendListHeight();
        }

        //Hide and show buttons if needed
        if(this.getMeetingPointForm() != undefined) {
            if(this.getMeetingPointForm().isCreateBtnHidden()) {
                this.getMeetingPointForm().hideCreateBtn(false);
                this.getMeetingPointForm().hideAddGroupBtn(true);
            }
        } else if(this.getGroupForm() != undefined) {
            if(this.getGroupForm().isCreateBtnHidden()) {
                this.getGroupForm().hideCreateBtn(false);
            }
        }
        
        this.closeAddFriendPanel();
    },

    /**
     * Open the Group selection panel
     */
    openAddGroupPanel: function() {
        Ext.Viewport.add({xtype: 'addGroupPanel'}).show();
    },

    /**
     * Close the Group selection panel
     */
    closeAddGroupPanel: function() {

        this.getAddGroupPanel().hide();

        this.getAddGroupPanel().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Add a Group to the store of added Groups after a single tap and close the Group selection panel
     * @param {Ext.dataview.DataView} list   List of Groups
     * @param {int}                   index  Index of the Group in the list
     * @param {Ext.Element}           target Group single tapped
     * @param {Ext.data.Model}        record Model instance associated to the item
     * @param {Ext.EventObject}       e      Event object
     * @param {Object}                eOpts  Options of the event
     */
    addGroupToAction: function(list, index, target, record, e, eOpts) {

        var addedGroupStore = Ext.getStore('addedGroupStore');
        
        if(addedGroupStore.getById(record.data.id) == undefined) {
            addedGroupStore.add(record);

            this.getAddedGroupList().setAddedGroupListHeight();
        }

        //Hide and show buttons if needed
        if(this.getMeetingPointForm() != undefined) {
            if(this.getMeetingPointForm().isCreateBtnHidden()) {
               this.getMeetingPointForm().hideCreateBtn(false);
                this.getMeetingPointForm().hideAddGroupBtn(true);
                this.getMeetingPointForm().hideAddFriendBtn(true);
            }
        }

        this.closeAddGroupPanel();
    },

    /////////////////////////////////////////// USER PROFILES & SEARCH////////////////////////////////////////////

    /**
     * Open the user profile panel and set the user informations to display
     */
    openProfileUser: function() {
        Ext.Viewport.add({xtype: 'userProfile'}).show();

        this.getUserProfile().setUserName(skiMe.app.user.get('name'));
        this.getUserProfile().setUserStatus(skiMe.app.user.get('status'));
        this.getUserProfile().setUserCountry(skiMe.app.user.getCountry().get('name_en'));
        this.getUserProfile().setUserSport(skiMe.app.user.get('sport'));
        this.getUserProfile().setUserAge(this.calculateAge(skiMe.app.user.get('birthday')));
        this.getUserProfile().setUserResort(skiMe.app.user.get('favresort'));
        this.getUserProfile().setModifyUserButton();

        //Displays the defaults profile picture if the user do not have one
        if(skiMe.app.user.getProfilePicture != null) {
            this.getUserProfile().setUserPicture(skiMe.app.user.getProfilePicture().get('url'));
        } else {
            this.getUserProfile().setUserPicture('/files/img/default/dflt.jpg');
        }

        //Convert date if checkin exists
        if(skiMe.app.user.getCheckin() != null) {
 
            var checkinDate = new Date(skiMe.app.user.getCheckin().getEvent().get('timestamp')*1000);
            var checkinDateFormatted = Ext.util.Format.date(checkinDate, 'j F Y, H:i')
            this.getUserProfile().setUserCheckin(checkinDateFormatted, null);
        } else {
            this.getUserProfile().setUserCheckin(null, null);
        }
    },

    /**
     * Open the profile panel of the selected Friend and set the Friend informations to display
     * @param {Ext.dataview.DataView} list   List of Friends
     * @param {int}                   index  Index of the Friend in the list
     * @param {Ext.Element}           target Friend single tapped
     * @param {Ext.data.Model}        record Model instance associated to the item
     * @param {Ext.EventObject}       e      Event object
     * @param {Object}                eOpts  Options of the event
     */
    openProfileFriend: function(list, index, target, record, e, eOpts) {
        Ext.Viewport.add({xtype: 'userProfile'}).show();

        this.getUserProfile().setUserName(record.get('name'));
        this.getUserProfile().setUserStatus(record.get('status'));
        this.getUserProfile().setUserCountry(record.getCountry().get('name_en'));
        this.getUserProfile().setUserSport(record.get('sport'));
        this.getUserProfile().setUserAge(this.calculateAge(record.get('birthday')));
        this.getUserProfile().setUserResort(record.get('favresort'));
        this.getUserProfile().setDeleteFriendButton();

        //Convert date
        if(record.getCheckin() != null) {
            var checkinDate = new Date(record.getCheckin().getEvent().get('timestamp')*1000);
            var checkinDateFormatted = Ext.util.Format.date(checkinDate, 'j F Y, H:i')
            this.getUserProfile().setUserCheckin(checkinDateFormatted, null);
        } else {
            this.getUserProfile().setUserCheckin(null, null);
        }
        
        //Displays the defaults profile picture if the friend do not have one
        if(record.getProfilePicture() != null) {
            this.getUserProfile().setUserPicture(record.getProfilePicture().get('url'));
        } else {
            this.getUserProfile().setUserPicture('/files/img/default/dflt.jpg');
        }
    },

    /**
     * Close the profile panel
     */
    closeUserProfile: function() {
        this.getUserProfile().hide();
        this.getUserProfile().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Calculate the age from a birthday
     * Ex: birthDate = 1992-05-29 -> Age = 21 years old (in 2013)
     * @param  {date} birthDate Birthday to calculate (Year-Month-Day)
     * @return {int}  Age in years
     */
    calculateAge: function(birthDate) {
        birthDate = new Date(birthDate);
        today = new Date();

        var years = (today.getFullYear() - birthDate.getFullYear());

        if (today.getMonth() < birthDate.getMonth() || 
            today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()) {
            years--;
        }

        return years;
    },

    ///////////////////////////////////////// STATUS /////////////////////////////////////////////////////
    
    /**
     * Open the status form to update the user status
     */
    openStatusForm: function() {
        Ext.Viewport.add({xtype: 'statusForm'}).show();
        this.getStatusForm().setValues({status: skiMe.app.user.get('status')});
    },

    /**
     * Close the status form
     */
    closeStatusForm: function() {
        this.getStatusForm().hide();
        this.getStatusForm().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Update the user status
     * Get the status entered by the user and update the user informations
     */
    updateStatus: function() {
        var mainController = this;
        var statusForm = this.getStatusForm();
        var status = statusForm.getValues().status;

        //Status can't be empty if the actual status is already empty
        if(skiMe.app.user.get('status') == '' && status == '') {
            statusForm.showStatusFailedLabel('Enter a status');
            return false;
        }

        //Status can't be the same as the actual status
        if(skiMe.app.user.get('status') == status) {
            statusForm.showStatusFailedLabel('Status unchanged');
            return false;
        }

        //Status modification
        skiMe.app.user.set('status', status);
        skiMe.app.user.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Event creation
        var event = Ext.create('skiMe.model.Event', {
            timestamp: Math.round(Date.now() / 1000),
            eventtype_id: 5 //Status update
        });
        event.setUser(skiMe.app.user);
        event.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Save the user with the new status
        skiMe.app.user.save({
            success: function(user, op) {
                console.log("Status updated.");

                event.save({
                    success: function(event, op) {

                        Ext.getStore('friendStore').each(function(friend) {

                            //Creation of the notification
                            var notification = Ext.create('skiMe.model.UserNotification', {
                                isRead: false
                            });
                            notification.setUser(friend);
                            notification.setEvent(event);
                            notification.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                            //Notification saving
                            notification.save({
                                success: function(notification, op) {
                                    console.log("Notification sent to "+friend.get('name'));
                                },
                                failure: function(notification, op) {
                                    mainController.requestFailure("Unable to send notification to "+friend.get('name'));
                                }                      
                            });
                        });
                    }, 
                    failure: function(event, op) {
                        mainController.requestFailure("An error occured. Please try again later.");
                    } 
                });

            },
            failure: function(user, op) {
                console.log("Failed to updated status. Please try again later.");
                mainController.getMapPanel().showError("Failed to updated status. Please try again later.");
            }
        });

        this.closeStatusForm();
    },
    
    ///////////////////////////////////////// GROUPS /////////////////////////////////////////////////////

    /**
     * Open the Group profile panel which shows the member of the Group
     * @param {Ext.dataview.DataView} list   List of Groups
     * @param {int}                   index  Index of the Group in the list
     * @param {Ext.Element}           target Group single tapped
     * @param {Ext.data.Model}        record Model instance associated to the item
     * @param {Ext.EventObject}       e      Event object
     * @param {Object}                eOpts  Options of the event
     */
    openGroupProfile: function(list, index, target, record, e, eOpts) {
        var mainController = this;

        Ext.Viewport.add({xtype: 'groupProfile'}).show();
        this.getGroupProfile().setGroupMembers(record.members());
        mainController.getGroupProfile().setTitle(record.get('name'));
    },

    /**
     * Close the Group profile panel
     */
    closeGroupProfile: function() {
        this.getGroupProfile().hide();
        this.getGroupProfile().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Open the Group creation form
     */
    openGroupForm: function() {
        Ext.Viewport.add({xtype: 'groupForm'}).show();
    },

    /**
     * Close the Group creation form
     */
    closeGroupForm: function() {
        Ext.getStore('addedFriendStore').removeAll();

        this.getGroupForm().hide();
        this.getGroupForm().onAfter('hide', function() {
            this.destroy();
        });
    },

    /**
     * Create a new Group:
     * Create the Group and the Event and save it.
     * For each member, create a GroupMember and save it and create a notification and save it.
     */
    createGroup: function() {

        var mainController = this;
        var grpForm = this.getGroupForm();
        var grpValues = grpForm.getValues();

        //group creation
        var group = Ext.create('skiMe.model.Group', {
            name: grpValues.groupName
        });
        group.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        //Event creation
        var event = Ext.create('skiMe.model.Event', {
            timestamp: Math.round(Date.now() / 1000),
            eventtype_id: 6 //Create group
        });
        event.setUser(skiMe.app.user);
        event.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

        var errors = group.validate();

        if(!errors.isValid()) {
            errors.each(function(error) {
                grpForm.showGroupFailedLabel(error.getMessage());
            });
            return false;
        }

        //Group saving
        group.save({
            success: function(group, op) {

                event.setGroup(group);

                //Event saving
                event.save({
                    success: function(event, op) {

                        mainController.requestSuccess('Group created !');

                        //Add group to store and modify height of the group list
                        //NOTE: store.sync() does not support callbacks method, this is why the group is saved and added after
                        Ext.getStore('groupStore').add(group);
                        mainController.getFriendsPanel().setGroupListHeight(Ext.getStore('groupStore').getCount() * 70);

                        //Adding the user as member of the group
                        var member = Ext.create('skiMe.model.GroupMember');
                        member.setGroup(group);
                        member.setUser(skiMe.app.user);
                        member.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                        //Member saving
                        member.save({
                            success: function(grpMember, op) {
                                group.members().add(skiMe.app.user);  
                            },
                            failure: function(grpMember, op) {
                                console.log("Error while adding member to group");
                            }
                        });
                        
                        //Member creation and User Notifications creation
                        Ext.getStore('addedFriendStore').each(function(friend) {

                            //Creation of the group member
                            var member = Ext.create('skiMe.model.GroupMember');
                            member.setGroup(group);
                            member.setUser(friend);
                            member.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
                            
                            //Member saving
                            member.save({
                                success: function(grpMember, op) {
                                    console.log(grpMember.getUser().get('name')+' added to the group');

                                    group.members().add(friend);

                                    //Creation of the notification
                                    var notification = Ext.create('skiMe.model.UserNotification', {
                                        isRead: false
                                    });
                                    notification.setUser(friend);
                                    notification.setEvent(event);
                                    notification.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());

                                    //Notification saving
                                    notification.save({
                                        success: function(notification, op) {
                                            console.log("Notification sent to "+friend.get('name'));
                                        },
                                        failure: function(notification, op) {
                                            mainController.requestFailure("Unable to send notification to "+friend.get('name'));
                                        },
                                        callback: function(notification) {
                                            Ext.getStore('addedFriendStore').remove(friend);
                                        }                        
                                    });
                                },
                                failure: function(grpMember, op) {
                                    mainController.requestFailure("Unable to add "+friend.get('name')+" to the group.");
                                }
                            });
                        });
                    },
                    failure: function(event, op) {
                        mainController.requestFailure("Group creation failed. Please try again later.");
                    }
                });
            },
            failure: function(group, op) {
                mainController.requestFailure("Group creation failed. Please try again later.");
            }
        });
        
        //destroy the form
        this.getGroupForm().hide();
        this.getGroupForm().onAfter('hide', function() {
            this.destroy();
        });
    },

    /////////////////////////////////// REQUESTS RESPONSES ///////////////////////////////////////////////
    
    /**
     * Display a success message
     * @param {string} message Success message to display
     */
    requestSuccess: function(message) {
        this.getMapPanel().showSuccess(message);
    },

    /**
     * Display an error message
     * @param {string} message Error message to display
     */
    requestFailure: function(message) {
        this.getMapPanel().showError(message);
        console.log("Oops something went wrong. Please try again later.");
    }
});