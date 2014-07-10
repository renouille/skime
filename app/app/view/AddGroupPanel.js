/**
 * Panel containing a list to select Groups
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.AddGroupPanel', {
    extend: 'Ext.Panel',
    xtype: 'addGroupPanel',
    config: {
        itemId: 'addGroupPanel',
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
            title: 'select a group',
            docked: 'top', 
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'addGroupPanelCloseBtn',
                name : 'closeBtn',
                iconCls : 'remove',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'list',
            itemId: 'addGroupList',
            disableSelection: true,
            store: 'groupStore',
            itemTpl: [
                '<div class="sm-listItem">',
                    '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/group.jpg" />',
                    '<span class="list-name">{name}</span>',
                '</div>'
            ],
            flex: 1
        }],
        listeners: [{
            delegate: '#addGroupPanelCloseBtn',
            event: 'tap',
            fn: 'onAddGroupPanelCloseBtnTap'
        }]
    },

    /**
     * Fire an event to notify the "close" button was tapped
     */
    onAddGroupPanelCloseBtnTap: function() {
        this.fireEvent('addGroupPanelCloseBtnTap');
    }
});