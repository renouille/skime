/**
 * Profile panel of a Group. Displays a list of all members of the Group
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.GroupProfile', {
    extend: 'Ext.Panel',
    xtype: 'groupProfile',
    config: {
        itemId: 'groupProfile',
        fullscreen: true,
        layout: 'fit',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        items:[{
            xtype: 'titlebar',
            docked: 'top', 
            itemId: 'groupTitle',
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'groupProfileCloseBtn',
                name : 'closeBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }, {
                xtype: 'button',
                align : 'right',
                itemId: 'upUserActionBtn',
                name : 'userActionBtn',
                iconCls: 'removeAlt',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'list',
            itemId: 'groupMembers',
            disableSelection: true,
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
            ]
        }],
        listeners: [{
            delegate: '#groupProfileCloseBtn',
            event: 'tap',
            fn: 'onGroupProfileCloseBtnTap'
        }]
    },

    /**
     * Set the Users member of the Group
     * @param {Ext.data.Store} members Users member of the group
     */
    setGroupMembers: function(members) {
        this.down('#groupMembers').setStore(members);
    },

    /**
     * Set the name of the group as title of the titlebar
     * @param {string} name Name of the group
     */
    setTitle: function(name) {
        this.down('#groupTitle').setTitle(name);
    },

    /**
     * Fire an event to notify the "close" button was tapped
     */
    onGroupProfileCloseBtnTap: function() {
        this.fireEvent('groupProfileCloseBtnTap');
    }
});