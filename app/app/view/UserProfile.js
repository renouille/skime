/**
 * Panel to display the Users informations :
 * -- Name
 * -- Profile Picture
 * -- Status
 * -- Age
 * -- Country
 * -- Favorite restort
 * -- Sport type
 * -- Last checkin
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.UserProfile', {
    extend: 'Ext.Panel',
    xtype: 'userProfile',
    requires: [
        'Ext.Img'
    ],
    config: {
        itemId: 'userProfile',
        fullscreen: 'true',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items:[{
            xtype: 'titlebar',
            title: 'profile',
            itemId: 'upTitlebar',
            docked: 'top',  
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'upBackBtn',
                name : 'backBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }, {
                xtype: 'button',
                align : 'right',
                itemId: 'upUserActionBtn',
                name : 'userActionBtn',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'image',
            itemId: 'upPicture',
            align: 'center',
            cls: 'sm-profilePicture'
        }, {
            xtype:'label',
            itemId: 'upStatus',
            cls: 'sm-upStatus',
            align: 'center'
        }, {
            xtype: 'panel',
            layout: 'hbox',
            width: '100%',
            pack: 'center',
            align: 'center',
            items: [{
                xtype: 'panel',
                itemId: 'upAgePanel',
                cls: 'sm-upGrid',
                flex: 1,
                items: [{
                    xtype: 'label',
                    itemId: 'upAgeHeader',
                    cls: 'sm-upHeader',
                    html: 'AGE'
                }, {
                    xtype: 'label',
                    itemId: 'upAgeLabel',
                    cls: 'sm-upLabel'
                }]
            }, {
                xtype: 'panel',
                itemId: 'upCountryPanel',
                cls: 'sm-upGrid',
                flex: 1,
                items: [{
                    xtype: 'label',
                    itemId: 'upCountryHeader',
                    cls: 'sm-upHeader',
                    html: 'LIVES IN'
                }, {
                    xtype: 'label',
                    itemId: 'upCountryLabel',
                    cls: 'sm-upLabel'
                }]
            }]
        }, {
            xtype: 'panel',
            layout: 'hbox',
            width: '100%',
            pack: 'center',
            align: 'center',
            items: [{
                xtype: 'panel',
                itemId: 'upSportPanel',
                cls: 'sm-upGrid',
                flex: 1,
                items: [{
                    xtype: 'label',
                    itemId: 'upSportHeader',
                    cls: 'sm-upHeader',
                    html: 'RIDES'
                }, {
                    xtype: 'label',
                    itemId: 'upSportLabel',
                    cls: 'sm-upLabel'
                }]
            }, {
                xtype: 'panel',
                itemId: 'upResortPanel',
                cls: 'sm-upGrid',
                flex: 1,
                items: [{
                    xtype: 'label',
                    itemId: 'upResortHeader',
                    cls: 'sm-upHeader',
                    html: 'FAV\' SKI AREA'
                }, {
                    xtype: 'label',
                    itemId: 'upResortLabel',
                    cls: 'sm-upLabel'
                }]
            }]
        }, {
            xtype: 'label',
            itemId: 'upCheckinHeader',
            cls: 'sm-upHeader checkin',
            html: 'LAST CHECKIN'
        }, {
            xtype: 'label',
            itemId: 'upCheckinDateLabel',
            cls: 'sm-upLabel',
            
        }],
        listeners: [{
            delegate: '#upBackBtn',
            event: 'tap',
            fn: 'onUpBackBtnTap'
        }]
    }, 

    /**
     * Fires an event to notify the "back" button was tapped
     */
    onUpBackBtnTap: function() {
        this.fireEvent('upBackBtnTap');
    },

    /**
     * Set the name of the User as title of the Titlebar
     * @param  {string} name Name of the User
     */
    setUserName: function(name) {
        this.down('#upTitlebar').setTitle(name); 
    },

    /**
     * Set the status of the User
     * @param  {string} status Status of the user
     */
    setUserStatus: function(status) {
        this.down('#upStatus').setHtml(status);
    },

    /**
     * Set the age of the User
     * @param  {int} age Age of the User (only number)
     */
    setUserAge: function(age) {
        this.down('#upAgeLabel').setHtml(age+' years old');
    }, 

    /**
     * Set the country of the User
     * @param  {string} country Country of the user
     */
    setUserCountry: function(country) {
        this.down('#upCountryLabel').setHtml(country);
    }, 

    /**
     * Set the sport type of the User
     * @param  {string} sport Sport type of the user
     */
    setUserSport: function(sport) {
        this.down('#upSportLabel').setHtml(sport);
    },

    /**
     * Set the favorite resort of the User
     * @param  {string} resort Name of the favorite resort of the User
     */
    setUserResort: function(resort) {
        this.down('#upResortLabel').setHtml(resort);
    },

    /**
     * Set the profile picture of the User
     * @param  {string} pictureUrl URL of the profile picture of the user
     */
    setUserPicture: function(pictureUrl) {
        this.down('#upPicture').setSrc(skiMe.config.Config.getSkimeUrl()+pictureUrl);
    },

    /**
     * Set the last checkin of the User
     * If no checkin, displays "-"
     * @param  {string} checkinDate     String formatted date of the last checkin of the User
     * @param  {string} checkinLocation Name of the resort of the last checkin of the User
     */
    setUserCheckin: function(checkinDate, checkinLocation) {

        if(checkinDate == null && checkinLocation == null) {
            this.down('#upCheckinDateLabel').setHtml('-');
        } else {
            this.down('#upCheckinDateLabel').setHtml(checkinDate);
        }
       
    },

    /**
     * Defines the icon to display for the "user action" button
     * Unfriend button, displayed if the user a friend
     */
    setDeleteFriendButton: function() {
        this.down('#upUserActionBtn').setIconCls('removeAlt');
    },

    /**
     * Defines the icon to display for the "user action" button
     * Add Frien button, displayed if the user is not a friend
     * @return {[type]} [description]
     */
    setAddFriendButton: function() {
        this.down('#upUserActionBtn').setIconCls('addAlt');
    },

    /**
     * Defines the icon to display for the "user action" button
     * Modifiy infos button, displayed if is the profile of the current user
     */
    setModifyUserButton: function() {
        this.down('#upUserActionBtn').setIconCls('modify');
    }
});