/**
 * Model to manage the GroupMember informations
 * Note: Database associative table
 * 
 * Fields:
 * -- id:       Id of GroupMember
 * -- user_id:  Id of the associated User
 * -- group_id: Id of the associated Group
 *
 * Belongs to: 
 * -- User
 * -- Group
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.GroupMember', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'user_id', type: 'int' }, 
			{ name: 'group_id', type: 'int' }, 
		],
		idProperty: 'id',
		belongsTo: [{
			name:'user',
			instanceName:'user',
			model:'skiMe.model.User',
			getterName:'getUser',
			setterName:'setUser',
			foreignKey:'user_id'
		}, {
			name:'group',
			instanceName:'group',
			model:'skiMe.model.Group',
			getterName:'getGroup',
			setterName:'setGroup',
			foreignKey:'group_id'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/groupmembers',
			reader: {
				type:'json',
				rootProperty: 'groupMembers',
				successProperty: 'success'
			}
		}
	}
});