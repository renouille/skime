/**
 * Store to manage the Meeting Points of a User
 * Type: REST
 *
 * @autor René Grossmann
 */
Ext.define('skiMe.store.MeetingPointStore', {
	extend: 'Ext.data.Store',
	xtype: 'meetingPointStore',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'skiMe.model.MeetingPoint',
		storeId: 'meetingPointStore',
		autoload: false,
		autoSync: false,
		proxy: {
			type:'rest',
			reader: {
				type:'json',
				rootProperty: 'meetingPoints',
				successProperty: 'success'
			}
		},
		listeners: {
		  	beforeload: function() {
		  		this.getProxy().setHeaders(skiMe.config.Config.getSMHeaders());
		      	this.getProxy().setUrl(skiMe.config.Config.getWebservices()+'/users/'+skiMe.app.user.getId()+'/meetingpoints');
		    	return true;
			}
		}
	}
});