/**
 * Model to manage the Event informations
 * 
 * Fields:
 * -- id: Id of the Event
 * -- timestamp: Creations time of the Event
 * -- eventtype_id: Id of associated the Eventtype of the Event
 * -- user_id: Id of the associated User
 * -- group_id: Id of the associated Group
 *
 * Belongs to: 
 * -- User
 * -- Group
 *
 * Has many:
 * -- Notifications
 *
 * @author René Grossmann
 */


Ext.define('skiMe.model.Event', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'timestamp', type: 'string' }, 
			{ name: 'eventtype_id', type: 'int' },
			{ name: 'user_id', type: 'int'},
			{ name: 'group_id', type: 'int'}
		],
		idProperty: 'id',
		belongsTo: [{
			name:'group',
			instanceName:'group',
			model:'skiMe.model.Group',
			getterName:'getGroup',
			setterName:'setGroup',
			associationKey:'group',
		}, {
			name:'user',
			instanceName:'user',
			model:'skiMe.model.User',
			getterName:'getUser',
			setterName:'setUser',
			associationKey:'user',
		}],
		hasMany: [{
			name:'notifications',
			instanceName:'notifications',
			model:'skiMe.model.UserNotification',
			associationKey:'notifications',
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/events',
			reader: {
				type:'json',
				rootProperty: 'event',
				successProperty: 'success'
			}
		}
	}
});