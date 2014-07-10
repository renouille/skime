/**
 * Store to manage the friends of a User
 * Type: REST
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.FriendStore', {
	extend: 'Ext.data.Store',
	xtype: 'friendStore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.User',
		storeId: 'friendStore',
		sorters: [{
            property : "name",
            direction: "ASC"
        }],
        proxy: {
			type:'rest',
			reader: {
				type:'json',
				rootProperty: 'friends',
				successProperty: 'success'
			}
		},
		autoload: false,
		autoSync: false,
		listeners: {
		  	beforeload: function() {
		  		this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		  		this.getProxy().setUrl(skiMe.config.Config.getWebservices()+'/users/'+skiMe.app.user.getId()+'/friends');
				return true;
			}
		}
	}
});