/**
 * Model to manage the Profile Picture informations
 * 
 * Fields:
 * -- url_thumbnail: URL of the thumbnail of the Profile Picture
 * -- user_id:       Id of the associated User
 * -- resort_id:     Id of the associated Resort
 *
 * Belongs to: 
 * -- User
 * -- Resort
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.ProfilePicture', {
	extend: 'skiMe.model.Image',
	config: {
		fields: [
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
			url: skiMe.config.Config.getWebservices()+'/profilepictures',
			reader: {
				type:'json',
				rootProperty: 'profilePicture',
				successProperty: 'success'
			}
		}
	}
});