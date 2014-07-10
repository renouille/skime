/**
 * Model to manage the Friendship informations
 * Note: Database associative table
 * 
 * Fields:
 * -- id:          Id of Friendship
 * -- fromuser_id: Id of the associated User (User who made the friend request)
 * -- touser_id:   Id of the associated User (User who received the friend request)
 *
 * Belongs to: 
 * -- User (fromUser)
 * -- User (toUser)
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Friendship', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' },
			{ name: 'fromuser_id', type: 'int' }, 
			{ name: 'touser_id', type: 'int' }, 
			{ name: 'status', type: 'string' }, 
		],
		idProperty: 'id',
		belongsTo: [{
			name:'fromUser',
			instanceName:'fromUser',
			model:'skiMe.model.User',
			getterName:'getFromUser',
			setterName:'setFromUser',
			associationKey:'fromUsers',
			foreignKey:'fromuser_id'
		}, {
			name:'toUser',
			instanceName:'toUser',
			model:'skiMe.model.User',
			getterName:'getToUser',
			setterName:'setToUser',
			associationKey:'toUsers',
			foreignKey:'touser_id'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/friendships',
			reader: {
				type:'json',
				rootProperty: 'friendship',
				successProperty: 'success'
			}
		}
	}
});