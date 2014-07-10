/**
 * Right container of the Slider. Contains the Notification list
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.NotifsPanel', {
    extend: 'Ext.Container',
    xtype: 'notifsPanel',
    config: {
        itemId: 'notifsPanel',
        docked: 'top',
        right: 0,
        height: '100%',
        layout: 'card',
        cls: 'nav-list shadowRight',
        zIndex: 2,
        items:[{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Notifications'
        }]
    }
});