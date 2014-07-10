/**
 * Store to manage the Groups of a User
 * Type: REST
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.GroupStore', {
	extend: 'Ext.data.Store',
	xtype: 'groupStore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.Group',
		storeId: 'groupStore',
		autoload: false,
		autoSync: false,
		sorters: [{
            property : "name",
            direction: "ASC"
        }],
        proxy: {
			type:'rest',
			reader: {
				type:'json',
				rootProperty: 'groups',
				successProperty: 'success'
			}
		},
		listeners: {
		  	beforeload: function() {
		  		this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		  		this.getProxy().setUrl(skiMe.config.Config.getWebservices()+'/users/'+skiMe.app.user.getId()+'/groups');
		  		return true;
			}
		}
	}
});