/**
 * Store to manage the Resorts
 * Type: REST
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.ResortStore', {
	extend: 'Ext.data.Store',
	xtype: 'resortStore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.Resort',
		storeId: 'resortStore',
		sorters: [{
            property : "name",
            direction: "ASC"
        }],
        proxy: {
			type:'rest',
			reader: {
				type:'json',
				rootProperty: 'resorts',
				successProperty: 'success'
			}
		},
		autoload: false,
		autoSync: false,
		listeners: {
		  	beforeload: function() {
		  		this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		  		this.getProxy().setUrl(skiMe.config.Config.getWebservices()+'/resorts');
				return true;
			}
		}
	}
});