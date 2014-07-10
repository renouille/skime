/**
 * Panel to display the search formular - Actually only a list of all users (work in progress)
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.SearchPanel', {
    extend: 'Ext.Panel',
    xtype: 'searchPanel',
    requires: [
        'Ext.Img'
    ],
    config: {
        itemId: 'searchPanel',
        fullscreen: 'true',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        items:[{
            xtype: 'titlebar',
            title: 'search',
            itemId: 'upTitlebar',
            docked: 'top',  
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'searchBackBtn',
                name : 'backBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'list',
            itemId: 'searchUserList',
            itemHeight: 60,
            title: 'users',
            height: '100%',
            width: '100%',
            store: 'userStore',
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
        }]
    },
    /**
     * Fires an event to notify the "back" button was tapped
     */
    onSearchBackBtnTap: function() {
        this.fireEvent('searchBackBtnTap');
    }
});