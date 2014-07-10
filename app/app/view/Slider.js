/**
 * Container grouping all 3 containers that composes the slider : FriendsPanel, MapPanel and NotifsPanel
 */

Ext.define('skiMe.view.Slider', {
    extend: 'Ext.Container',
    xtype: 'sliderView',
    requires:[
        'Ext.TitleBar'
    ],
    config: {
        fullscreen: true,
        cls: 'slider',
        layout: 'fit',
        showAnimation: 'pop',
        items: [{
            xtype: 'friendsPanel',
            width: 250
        }, {
            xtype: 'mapPanel',
            width: '100%'
        },{
            xtype: 'notifsPanel',
            width: 250
        }]
    },

    /**
     * Fires an event to notify the main view is initializing and the data can be loaded
     */
    initialize: function() {
        this.fireEvent('applicationLaunch');
    }
});