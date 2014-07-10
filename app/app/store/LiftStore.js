/**
 * Store to manage the Lifts
 * Type: REST
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.LiftStore', {
	extend: 'Ext.data.Store',
	xtype: 'liftstore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.Lift',
		storeId: 'liftStore',
		listeners: {
		  	beforeload: function() {
		    	this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		    	return true;
			}
		}
	}
});