/**
 * Model to manage the UserNotification informations
 * Note: Database associative table
 * 
 * Fields:
 * -- id:        Id of the UserNotification
 * -- timestamp: Creation time of the UserNotification
 * -- isread:    Read state of the UserNotification
 * -- user_id:   Id of the associated User
 * -- event_id:  Id of the associated Event
 *
 * Belongs to: 
 * -- User
 * -- Group
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.UserNotification', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' },
			{ name: 'timestamp', type: 'string' },
			{ name: 'isread', type: 'boolean' },
			{ name: 'event_id', type: 'int' },
			{ name: 'user_id', type: 'int' }
		],
		idProperty: 'id',
		belongsTo: [{
			name:'user',
			instanceName:'user',
			model:'skiMe.model.User',
			getterName:'getUser',
			setterName:'setUser',
			associationKey:'users',
			foreignKey:'user_id'
		}, {
			name:'event',
			instanceName:'event',
			model:'skiMe.model.Event',
			getterName:'getEvent',
			setterName:'setEvent',
			associationKey:'events',
			foreignKey:'event_id'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/usernotifications',
			reader: {
				type:'json',
				rootProperty: 'userNotification',
				successProperty: 'success'
			}
		}
	}
});