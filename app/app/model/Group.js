/**
 * Model to manage the Group informations
 * 
 * Fields:
 * -- id:   Id of the Group
 * -- name: Name of the Group
 *
 * Has many: 
 * -- Events
 * -- Members
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Group', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'name', type: 'string' }
		],
		validations : [{
            type : 'presence',
            name : 'name',
            message : "A valid name is required."
        }],
		idProperty: 'id',
		hasMany: [{ 
			name:'events',
			instanceName:'events',
			model:'skiMe.model.Event',
			associationKey:'events'
		},{
			name: 'members',
			instanceName: 'members',
			model: 'skiMe.model.User',
			associationKey: 'members'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/groups',
			reader: {
				type:'json',
				rootProperty: 'groups',
				successProperty: 'success'
			}
		}
	}
});