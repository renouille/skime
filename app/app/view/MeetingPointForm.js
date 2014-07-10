/**
 * Form to create a new Meeting Point with a meeting time, a small comment of 140 characters and members
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.MeetingPointForm', {
    extend: 'Ext.form.Panel',
    xtype: 'meetingPointForm',
    requires: [
        'Ext.ux.Time',
        'Ext.ux.TimePicker'
    ],
    config: {
        itemId: 'meetingPointForm',
        fullscreen: 'true',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items:[{
            xtype: 'titlebar',
            title: 'meeting point',
            docked: 'top',  
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'mpBackBtn',
                name : 'backBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'timepickerfield',
            itemId: 'meetingPointTimePicker',
            name: 'meetingTime',
            label: 'MEETING TIME',
            labelCls: 'sm-formLabel',
            labelWidth: '80%',
            clearIcon: false
        }, {
            xtype: 'textareafield',
            itemId: 'meetingPointComment',
            name: 'meetingPointComment',
            required: false,
            maxRows: 10,
            maxLength: 140,
            label: 'COMMENTS',
            labelCls: 'sm-formLabel',
            labelWidth: '80%',
            clearIcon: false
        }, {
            xtype: 'button',
            itemId: 'mpAddFriendBtn',
            text: 'Add some friends',
            cls: 'sm-button addElement',
            iconCls: 'plus',
            width: '80%'
        }, {
            xtype: 'button',
            itemId: 'mpAddGroupBtn',
            text: 'Add a group',
            cls: 'sm-button addElement',
            iconCls: 'plus',
            width: '80%'
        }, {
            xtype: 'addedFriendList'
        }, {
            xtype: 'addedGroupList'
        }, {
            xtype: 'button',
            itemId: 'mpCreateBtn',    
            text: 'Create meeting point',  
            cls: 'sm-button default',
            width: '80%',
            hidden: true
        }],
        listeners: [{
            delegate: '#mpCreateBtn',
            event: 'tap',
            fn: 'onMPCreateBtnTap'
        }, {
            delegate: '#mpBackBtn',
            event: 'tap',
            fn: 'onMPBackBtnTap'
        }, {
            delegate: '#mpAddFriendBtn',
            event: 'tap',
            fn: 'onMPAddFriendBtnTap',
        }, {
            delegate: '#mpAddGroupBtn',
            event: 'tap',
            fn: 'onMPAddGroupBtnTap',
        }]
    },

    /**
     * Fires an event to notify the "create Meeting Point" button was tapped
     */
    onMPCreateBtnTap: function() {
        this.fireEvent('mpCreateBtnTap');
    }, 

    /**
     * Fires an event to notify the "back" button was tapped
     */
    onMPBackBtnTap: function() {
        this.fireEvent('mpBackBtnTap');
    },

    /**
     * Fires an event to notify the "add Friend" button was tapped
     */
    onMPAddFriendBtnTap: function() {
        this.fireEvent('mpAddFriendBtnTap');
    },

    /**
     * Fires an event to notify the "add Group" button was tapped
     */
    onMPAddGroupBtnTap: function() {
        this.fireEvent('mpAddGroupBtnTap');
    },

    /**
     * Hide or unhide the "add Friend" button
     * @param {boolean} value New value of the hidden property
     */
    hideAddFriendBtn: function(value) {
        this.down('#mpAddFriendBtn').setHidden(value);
    },

    /**
     * Hide or unhide the "add Group" button
     * @param {boolean} value New value of the hidden property
     */
    hideAddGroupBtn: function(value) {
        this.down('#mpAddGroupBtn').setHidden(value);
    },

    /**
     * Hide or unhide the "create" button
     * @param {boolean} value New value of the hidden property
     */
    hideCreateBtn: function(value) {
        this.down('#mpCreateBtn').setHidden(value);
    },

    /**
     * Returns the value of the hidden property of the "create" button
     * @return {boolean} True if hidden, false if not
     */
    isCreateBtnHidden: function() {
        return this.down('#mpCreateBtn').isHidden();
    }
});