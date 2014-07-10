/**
 * Model to manage the Country informations
 * 
 * Fields:
 * -- code:    Code and id of the Country
 * -- name_fr: French name of the Country
 * -- name_en: English name of the Country
 *
 * Has many: 
 * -- Users
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Country', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'code', type: 'string' }, 
			{ name: 'name_fr', type: 'string' }, 
			{ name: 'name_en', type: 'string' },
		],
		idProperty: 'code',
		hasMany: [{	
			name:'users',
			instanceName:'users',
			model:'skiMe.model.User',
			associationKey:'users',
			primaryKey: 'id',
			foreignKey: 'country_code',
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/countries',
			reader: {
				type:'json',
				rootProperty: 'country',
				successProperty: 'success'
			}
		}
	}
});