/**
 * Model to manage the authentication informations of the users session
 * 
 * Fields:
 * -- id:        Id of authentication model
 * -- userId:    Id of the user corresponding session
 * -- authToken: Authentication token of the session
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Auth', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int'},
			{ name: 'user_id', type: 'int'},
			{ name: 'authToken', type: 'string' }
		],
		idProperty: 'id',
		proxy: {
			type: 'localstorage',
			id: 'sm-authToken'
		}
	}
});