/**
 * Model to manage the Webcam informations
 * 
 * Fields:
 * -- title:         Title of the Webcam
 * -- position:      Position of the Webcam
 * -- resort_id:     Id of the associated Resort
 *
 * Belongs to: 
 * -- Resort
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Webcam', {
	extend: 'skiMe.model.Image',
	config: {
		fields: [
			{ name: 'title', type: 'string' }, 
			{ name: 'position', type: 'string' },
			{ name: 'resort_id', type: 'int' }
		],
		belongsTo: [{
			name:'resort',
			instanceName:'resort',
			model:'skiMe.model.Resort',
			associationKey:'resort'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/webcams',
			reader: {
				type:'json',
				rootProperty: 'webcam',
				successProperty: 'success'
			}
		}
	}
});