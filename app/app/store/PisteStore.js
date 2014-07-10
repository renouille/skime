/**
 * Store to manage the Pistes
 * Type: REST
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.PisteStore', {
	extend: 'Ext.data.Store',
	xtype: 'waystore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.Piste',
		storeId: 'pisteStore',
		listeners: {
		  	beforeload: function() {
		    	this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		    	return true;
			}
		}
	}
});