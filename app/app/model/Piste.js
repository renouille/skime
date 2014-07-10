/**
 * Model to manage the Piste informations
 * 
 * Fields:
 * -- id:      Id of the Piste
 * -- version: version of the Piste
 * -- tstamp:  Creation timestamp of the Piste
 * -- tags:    Tags of the Piste
 * -- geojson: GeoJSON defining the geometry of the Piste
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Piste', {
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
			url: skiMe.config.Config.getWebservices()+'/pistes',
			reader: {
				type:'json',
				rootProperty: 'pistes',
				successProperty: 'success'
			}
		}
	}
});