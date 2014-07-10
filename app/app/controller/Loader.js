/**
 * Loader of the skiMe Application
 * Loads all the base data needed for application launch
 * Data loaded :
 * -- Pistes
 * -- Lifts
 * -- MeetinPoints
 * -- Groups
 * 
 * @author René Grossmann
 */

Ext.define('skiMe.controller.Loader', {
    extend: 'Ext.app.Controller',
    config: {
        nbFinishedTasks: 0,
        nbTotalTasks: 6,
        refs: {
            mainView: 'sliderView',
            friendsPanel: 'friendsPanel'
        },
        control: {
            mainView: {
                applicationLaunch: 'loadData'
            }
        }
    }, 

    /**
     * Load all the needed data for application launch
     */
    loadData: function () {

        var loader = this;

        this.getMainView().setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });

        //Loading of the pistes
        Ext.getStore('pisteStore').load({
            callback: function(records, operation, success) {

                if(success) {
                    console.log("Pistes loaded");
                    loader.dataLoaded();
                } else {
                    console.log("Oops, something went wrong...");
                    var auth = Ext.getStore('authStore').getById(1);
                    auth.erase();
                    Ext.getStore('authStore').sync();
                }
                
            }  
        });

        //Loading of the lifts
        Ext.getStore('liftStore').load({
            callback: function(records, operation, success) {

                if(success) {
                    console.log("Lifts loaded");
                    loader.dataLoaded();
                } else {
                    console.log("Oops, something went wrong...");
                    var auth = Ext.getStore('authStore').getById(1);
                    auth.erase();
                    Ext.getStore('authStore').sync();
                }
                
            }  
        });

        //Loading of the meeting points
        ////User can have zero active meeting points, so data must be shown even if an error 404 is received
        Ext.getStore('meetingPointStore').load({
            callback: function(records, operation, success) {

                loader.dataLoaded();

                if(success) {
                    console.log("MeetingPoints loaded")
                } else {
                    console.log("No active meeting points found.");
                }
            }
        });

        //Loading of the friends
        ////User can have zero friends, so data must be shown even if an error 404 is received
        Ext.getStore('friendStore').load({
            callback: function(records, operation, success) {

                loader.dataLoaded();

                if(success) {
                    console.log("Friends loaded")

                    loader.getFriendsPanel().setFriendListHeight(Ext.getStore('friendStore').getCount() * 70);
                    loader.getFriendsPanel().setFriendListStore(Ext.getStore('friendStore')); 
                } else {
                    console.log("No friends found.");
                }
            }
        });

        //Loading of groups
        //User can be in zero groups, so data must be shown even if an error 404 is received
        Ext.getStore('groupStore').load({
            callback: function(records, operation, success) {

                loader.dataLoaded();

                if(success) {
                    console.log("Groups loaded")

                    loader.getFriendsPanel().setGroupListHeight(Ext.getStore('groupStore').getCount() * 70);
                    loader.getFriendsPanel().setGroupListStore(Ext.getStore('groupStore')); 
                } else {
                    console.log("No groups found.");
                }
            }
        });

        //Loading of resorts
        Ext.getStore('resortStore').load({
            callback: function(records, operation, success) {

                if(success) {
                    console.log("Resorts loaded");
                    loader.dataLoaded();
                } else {
                    console.log("Error while loading resorts.");
                }
            }
        });
    },

    /**
     * When all the data is loaded, unmask the application and set the websocket connection
     */
    dataLoaded: function() {

        this.setNbFinishedTasks(this.getNbFinishedTasks()+1);
        
        if( this.getNbFinishedTasks() == this.getNbTotalTasks()) {

            this.getApplication().getController('MapController').showData();

            this.getApplication().getController('SocketController').setConnection();

            this.getMainView().setMasked(false);
        }
    }
});