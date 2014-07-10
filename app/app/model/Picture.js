/**
 * Model to manage the Picture informations
 * 
 * Fields:
 * -- title:         Title of the Picture
 * -- description:   Description of the Picture
 * -- position:      Position of the Picture
 * -- url_thumbnail: URL of the thumbnail of the Picture
 * -- user_id:       Id of the associated User
 * -- resort_id:     Id of the associated Resort
 *
 * Belongs to: 
 * -- User
 * -- Resort
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Picture', {
	extend: 'skiMe.model.Image',
	config: {
		fields: [
			{ name: 'title', type: 'string' }, 
			{ name: 'description', type: 'string' }, 
			{ name: 'position', type: 'string' },
			{ name: 'timestamp', type: 'string' },
			{ name: 'url_thumbnail', type: 'string' },
			{ name: 'user_id', type: 'int' },
			{ name: 'resort_id', type: 'int' }
		],
		belongsTo: [{
			name:'user',
			instanceName:'user',
			model:'skiMe.model.User',
			associationKey:'user'
		}, {
			name:'resort',
			instanceName:'resort',
			model:'skiMe.model.Resort',
			associationKey:'resort'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/pictures',
			reader: {
				type:'json',
				rootProperty: 'picture',
				successProperty: 'success'
			}
		}
	}
});