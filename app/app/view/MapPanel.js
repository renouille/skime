/**
 * Main container of the slider. Contains the map and Path style buttons
 * 
 * @author: René Grossmann 
 */

Ext.define('skiMe.view.MapPanel', {
	extend: 'Ext.Container',
	requires: ['Ext.ux.LeafletMap'],
	xtype: 'mapPanel',
    config: {
    	itemId: 'mapPanel',
    	cls: 'slide',
		zIndex: 3,
		layout: 'card',
		items: [{
			xtype: 'titlebar',
			title: 'Villars-Gryon',
			docked: 'top',	
			items: [{
				xtype: 'button',
				align : 'left',
				name : 'friendsPanelBtn',
				iconCls : 'user',
				cls: 'sm-titlebar-button'
			}, {
				align : 'right',
				name : 'notifsPanelBtn',
				iconCls : 'menu',
				cls: 'sm-titlebar-button'
			}]
		}, {
			xtype: 'leafletmap',
            useCurrentLocation: true,
            autoMapCenter: false,
            enableOwnPositionMarker: false,
            mapOptions: {
                zoom: 13,
                zoomControl: false,
                attributionControl: false
            },
            layout: 'hbox',
            items: [{
            	xtype: 'pathmenu',
            	docked: 'bottom'
            }]
        }, {
		    xtype: 'panel',
		    top: 0,
		    itemId: 'msgPanel',
		    hidden: true,
		    hideAnimation: 'fadeOut',
		    showAnimation: 'fadeIn',
        }]
    },

    /**
     * Display an error message on the map for 5 seconds
     * @param  {string} message Error message to display
     */
    showError: function(message) {

    	var msgPanel = this.down('#msgPanel');
	    msgPanel.setHtml(message);
	    msgPanel.setCls('sm-msg error');
	    msgPanel.show();

	    Ext.defer(function() { msgPanel.hide();}, 5000);
    },

    /**
     * Display a confirmation message on the map for 5 seconds
     * @param  {string} message Confirmation message to display
     */
    showSuccess: function(message) {

    	var msgPanel = this.down('#msgPanel');
	    msgPanel.setHtml(message);
	    msgPanel.setCls('sm-msg success');
	    msgPanel.show();

	    Ext.defer(function() { msgPanel.hide();}, 5000);
    }
});