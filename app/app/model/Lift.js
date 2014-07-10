/**
 * Model to manage the Lift informations
 * 
 * Fields:
 * -- id:      Id of Lift
 * -- version: version of the Lift
 * -- tstamp:  Creation timestamp of the Lift
 * -- tags:    Tags of the Lift
 * -- geojson: GeoJSON defining the geometry of the Lift
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Lift', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'version', type: 'int' }, 
			{ name: 'tstamp', type: 'date' }, 
			{ name: 'tags', type: 'string'},
			{ name: 'geojson', type: 'string'}
		],

		idProperty: 'id',
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/lifts',
			reader: {
				type:'json',
				rootProperty: 'lifts',
				successProperty: 'success'
			},
			headers: {                
				'Accept': 'application/json'                 
			}
		}
	}
});