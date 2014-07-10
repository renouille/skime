/**
 * Form to create a new Group
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.GroupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'groupForm',
    config: {
        itemId: 'groupForm',
        fullscreen: 'true',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items:[{
            xtype: 'titlebar',
            title: 'new group',
            docked: 'top',  
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'grpBackBtn',
                name : 'backBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'textfield',
            itemId: 'groupName',
            name: 'groupName',
            width: '80%',
            label: 'NAME',
            labelCls: 'sm-formLabel',
            labelWidth: '80%',
            clearIcon: false,
            maxLength: 32
        }, {
            xtype: 'label',
            html: 'MEMBERS',
            cls: 'sm-formLabel',
            width: '80%'
        }, {
            xtype: 'button',
            itemId: 'grpAddFiendBtn',
            text: 'add a group member',
            cls: 'sm-button addElement',
            iconCls: 'plus',
            width: '80%'
        }, {
            xtype: 'addedFriendList'
        }, {
            xtype: 'button',
            itemId: 'grpCreateBtn',    
            text: 'Create group',  
            cls: 'sm-button default',
            width: '80%',
            hidden: true
        }, {
            xtype: 'label',
            itemId: 'grpFailedLabel',
            hidden: true,
            hideAnimation: 'fadeOut',
            showAnimation: 'fadeIn',
            cls: 'sm-label-error'
        }],
        listeners: [{
            delegate: '#grpCreateBtn',
            event: 'tap',
            fn: 'onGRPCreateBtnTap'
        }, {
            delegate: '#grpBackBtn',
            event: 'tap',
            fn: 'onGRPBackBtnTap'
        }, {
            delegate: '#grpAddFiendBtn',
            event: 'tap',
            fn: 'onGRPAddFriendBtnTap'
        }]
    },

    /**
     * Fire an event to notify the "create" button was tapped
     * If an error message is displayed, hide it before to let time to the fade animation to finish
     */
    onGRPCreateBtnTap: function() {

        var groupForm = this;
        var errorLabel = this.down('#grpFailedLabel');

        if(errorLabel.isHidden()) {
            this.fireEvent('grpCreateBtnTap');
        } else {
            errorLabel.hide();
            errorLabel.onAfter('hide', function() {
                groupForm.fireEvent('grpCreateBtnTap');
            });
        }
    }, 

    /**
     * Fire an event to notify the "back" button was tapped
     */
    onGRPBackBtnTap: function() {
        this.fireEvent('grpBackBtnTap');
    },

    /**
     * Fire an event to notify the "add Friend" button was tapped
     */
    onGRPAddFriendBtnTap: function() {
        this.fireEvent('grpAddFriendBtnTap');
    },

    /**
     * Hide or unhide the "create" button
     * @param {boolean} value New value of the hide property
     */
    hideCreateBtn: function(value) {
        this.down('#grpCreateBtn').setHidden(value);
    },

    /**
     * Returns the value of the hidden property of the "create" button
     * @return {boolean} True if hidden, false if not
     */
    isCreateBtnHidden: function() {
        return this.down('#grpCreateBtn').isHidden();
    },

    /**
     * Display an error message
     * @param {string} message Error message to display
     */
    showGroupFailedLabel: function (message) {
        var label = this.down('#grpFailedLabel');
        label.setHtml(message);
        label.show();
    }
});