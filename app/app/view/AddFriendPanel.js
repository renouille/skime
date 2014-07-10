/**
 * Panel containing a list to select Friends
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.AddFriendPanel', {
    extend: 'Ext.Panel',
    xtype: 'addFriendPanel',
    config: {
        itemId: 'addFriendPanel',
        modal: true,
        height: '70%',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        layout: {
            type : 'hbox',
            align: 'stretch'
        },
        showAnimation: {
            type: 'slideIn',
            direction: 'up'
        },
        hideAnimation: {
            type: 'slideOut',
            direction: 'down'
        },
        items:[{
            xtype: 'titlebar',
            title: 'select a friend',
            docked: 'top', 
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'addFriendPanelCloseBtn',
                name : 'closeBtn',
                iconCls : 'remove',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'list',
            itemId: 'addFriendList',
            disableSelection: true,
            store: 'friendStore',
            itemTpl: [
                '<div class="sm-listItem">',
                    '<tpl if="profilePicture !== null">',
                        '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'{profilePicture.url_thumbnail}" />',
                    '<tpl else>',
                        '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/dflt_thumb.jpg" />',
                    '</tpl>',
                    '<span class="list-name">{name}</span>',
                    '<span class="list-status">{status}</span>',
                '</div>'
            ],
            flex: 1
        }],
        listeners: [{
            delegate: '#addFriendPanelCloseBtn',
            event: 'tap',
            fn: 'onAddFriendPanelCloseBtnTap'
        }]
    },

    /**
     * Fire an event to notify the "close" button was tapped
     */
    onAddFriendPanelCloseBtnTap: function() {
        this.fireEvent('addFriendPanelCloseBtnTap');
    }
});