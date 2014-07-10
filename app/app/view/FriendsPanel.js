/**
 * Left container of the Slider
 * 
 * @author René Grossmann
 */
Ext.define('skiMe.view.FriendsPanel', {
    extend: 'Ext.Container',
    xtype: 'friendsPanel',
    requires: [
        'Ext.Img',
        'Ext.List'
    ],
    config: {
        docked: 'top',
        left: 0,
        height: '100%',
        layout: 'card',
        cls: 'nav-list shadowLeft',
        zIndex: 1,
        items:[{
            xtype: 'toolbar',
            docked: 'top',  
            items: [{
                xtype: 'image',
                align: 'left',
                name : 'appicon',
                itemId: 'appicon',
                cls: 'sm-appicon'
            }, {
                xtype: 'spacer'
            }, {
                name : 'userSearchBtn',
                iconCls : 'search',
                itemId: 'userSearchBtn',
                centered: true,
                cls: 'sm-titlebar-button'
            }, {
                xtype: 'spacer'
            }]
        }, {
            xtype: 'panel',
            itemId: 'friendPanelContent',
            cls: 'sliderContentPanel',
            scrollable: true,
            items: [{
                xtype: 'panel',
                itemId: 'userInfoItem',
                cls: 'sm-userInfoItem',
                tpl: [
                    '<div class="sm-listItem">',
                        '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'{url_thumbnail}" />',
                        '<span class="list-name">{name}</span>',
                        '<span class="list-status">{status}</span>',
                    '</div>'
                ]
            }, {
                xtype: 'label',
                html: 'Friends',
                cls: 'sm-listTitle'
            }, {
                xtype: 'list',
                itemId: 'friendsPanelList',
                title: 'friends',
                scrollable: false,
                disableSelection: true,
                itemTpl: [
                    '<div class="sm-listItem">',
                        '<tpl if="profilePicture !== undefined">',
                            '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'{profilePicture.url_thumbnail}" />',
                        '<tpl else>',
                            '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/dflt_thumb.jpg" />',
                        '</tpl>',
                        '<span class="list-name">{name}</span>',
                        '<span class="list-status">{status}</span>',
                    '</div>'
                ]
            }, {
                xtype: 'label',
                html: 'Groups',
                cls: 'sm-listTitle'
            }, {
                xtype: 'list',
                itemId: 'friendsPanelGroupList',
                title: 'Groups',
                store: 'groupStore',
                scrollable: false,
                disableSelection: true,
                itemTpl: [
                    '<div class="sm-listItem">',
                        '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/group.jpg" />',
                        '<span class="list-name">{name}</span>',
                    '</div>'
                ]
            }]
        }],
        listeners: [{
            delegate: '#userSearchBtn',
            event: 'tap',
            fn: 'onUserSearchBtnTap'
        }]
    },

    /**
     * Initialize the container
     * Set the data of the UserProfile item and his tap event
     */
    initialize: function() {
        var userInfoItem = this.down('#userInfoItem');


        if(skiMe.app.user.getProfilePicture() != null) {
            var url_thumbnail = skiMe.app.user.getProfilePicture().get('url_thumbnail');
        } else {
            var url_thumbnail = '/files/img/default/dflt_thumb.jpg'
        }

        var data = {
            name: skiMe.app.user.get('name'),
            status: skiMe.app.user.get('status'),
            url_thumbnail: url_thumbnail
        }

        //Tap events on Panels can't be set in listeners param
        var friendsPanel = this;
        var userInfoItem = this.down('#userInfoItem');
        userInfoItem.setData(data);
        userInfoItem.element.on({
            tap: function() { friendsPanel.onUserInfoItemTap(); }
        });
    },

    /**
     * Set the height of the Friend list
     * @param {int} height New height of the friend list
     */
    setFriendListHeight: function(height) {
        this.down('#friendsPanelList').setHeight(height);
    },

    /**
     * Set the store of the Friend list
     * @param {Ext.store.FriendStore} store Store of the friend list
     */
    setFriendListStore: function(store) {
        this.down('#friendsPanelList').setStore(store);
    },

    /**
     * Set the height of the Group list
     * @param {int} height New height of the group list
     */
    setGroupListHeight: function(height) {
        this.down('#friendsPanelGroupList').setHeight(height);
    },

    /**
     * Set the store of the Group list
     * @param {Ext.store.GroupStore} store Store of the group list
     */
    setGroupListStore: function(store) {
        this.down('#friendsPanelGroupList').setStore(store);
    },

    /**
     * Fire an event to notify the "userInfo" item was tapped
     */
    onUserInfoItemTap: function() {
        this.fireEvent('userInfoItemTap');
    },

    /**
     * Fire an event to notify the "search" button was tapped
     */
    onUserSearchBtnTap: function() {
        this.fireEvent('userSearchBtnTap');
    }
});