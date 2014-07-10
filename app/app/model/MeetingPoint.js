/**
 * Model to manage the Meeting Point informations
 * 
 * Fields:
 * -- id:        Id of the Meeting Point
 * -- position:  Position of the Meeting Point
 * -- isactive:  State of the Meeting Point
 * -- comments:  Comments of the Meeting Point
 * -- timestamp: Meeting time of the Meeting Point
 * -- event_id:  Id of the associated Event
 *
 * Has one: 
 * -- Event
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.MeetingPoint', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'position', type: 'string'},
			{ name: 'isactive', type: 'string'},
			{ name: 'comments', type: 'string'},
			{ name: 'timestamp', type: 'string'},
			{ name: 'event_id', type: 'int'}
		],
		validations : [{
            type : 'presence',
            name : 'position',
            message : "A valid position is required."
        }, {
            type : 'presence',
            name : 'timestamp',
            message : "A valid meeting point time is required"
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
			url: skiMe.config.Config.getWebservices()+'/meetingpoints',
			reader: {
				type:'json',
				rootProperty: 'meetingPoint',
				successProperty: 'success'
			}
		}
	}
});