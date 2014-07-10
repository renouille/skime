/**
 * Model to manage the Checkin informations
 * 
 * Fields:
 * -- id:       Id of the Checkin
 * -- position: Position of the checkin
 * -- event_id: Id of the associated Event
 *
 * Has one: 
 * -- Event
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Checkin', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'position', type: 'string' },
			{ name: 'event_id', type: 'int'}
		],
		validations : [{
            type : 'presence',
            name : 'position',
            message : "Position is requiered"
        }],
		idProperty: 'id',
		hasOne: [{
			name:'event',
			instanceName:'event',
			model:'skiMe.model.Event',
			associationKey:'event',
			foreignKey: 'event_id',
			getterName: 'getEvent',
			setterName: 'setEvent'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/checkins',
			reader: {
				type:'json',
				rootProperty: 'checkin',
				successProperty: 'success'
			}
		}
	}
});