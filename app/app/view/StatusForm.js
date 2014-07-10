/**
 * Form to update or delete the status of the User
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.StatusForm', {
    extend: 'Ext.form.Panel',
    xtype: 'statusForm',
    config: {
        itemId: 'statusForm',
        fullscreen: 'true',
        showAnimation: 'fadeIn',
        hideAnimation: 'fadeOut',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items:[{
            xtype: 'titlebar',
            title: 'my status',
            docked: 'top',  
            items: [{
                xtype: 'button',
                align : 'left',
                itemId: 'statusBackBtn',
                name : 'backBtn',
                iconCls : 'chevron-left',
                cls: 'sm-titlebar-button'
            }]
        }, {
            xtype: 'textfield',
            itemId: 'statusField',
            name: 'status',
            width: '80%',
            label: 'STATUS',
            placeHolder: 'What\'s on your mind?',
            labelCls: 'sm-formLabel',
            labelWidth: '80%',
            clearIcon: false,
            maxLength: 32
        }, {
            xtype: 'button',
            itemId: 'statusUpdateBtn',    
            text: 'Update status',  
            cls: 'sm-button default',
            width: '80%',
        }, {
            xtype: 'label',
            itemId: 'statusFailedLabel',
            hideAnimation: 'fadeOut',
            showAnimation: 'fadeIn',
            cls: 'sm-label-error',
            hidden: true,
        }],
        listeners: [{
            delegate: '#statusUpdateBtn',
            event: 'tap',
            fn: 'onStatusUpdateBtnTap'
        }, {
            delegate: '#statusBackBtn',
            event: 'tap',
            fn: 'onStatusBackBtnTap'
        }]
    },


    /**
     * Fires an event to notify the "update status" button was tapped.
     * If an error message was previously displayed, hide it
     */
    onStatusUpdateBtnTap: function() {

        var statusForm = this;
        var errorLabel = this.down('#statusFailedLabel');

        if(errorLabel.isHidden()) {
            this.fireEvent('statusUpdateBtnTap');
        } else {
            errorLabel.hide();
            errorLabel.onAfter('hide', function() {
                statusForm.fireEvent('statusUpdateBtnTap');
            });
        }
    }, 

    /**
     * Fires an event to notify the "back" button was tapped
     */
    onStatusBackBtnTap: function() {
        this.fireEvent('statusBackBtnTap');
    },

    /**
     * Displays an error message
     * @param  {string} message Error message to display
     */
    showStatusFailedLabel: function (message) {
        var label = this.down('#statusFailedLabel');
        label.setHtml(message);
        label.show();
    }
});