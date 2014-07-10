/**
 * Model to manage the Resort informations
 * 
 * Fields:
 * -- id:               Id of the Resort
 * -- name:             Name of the Resort
 * -- boundaries:       Boundaries of the Resort
 * -- description:      Description of the Resort
 * -- pisteskm:         Number of kilometers of pistes of the Resort
 * -- liftsnumber:      Number of lifts of the Resort
 * -- seasonstart:      Start date of the season
 * -- seasonend:        End date of the season
 * -- openfrom: 		Opening time of the Resort
 * -- openuntil:        Closing time of the Resort
 * -- website:          Website url of the Resort
 * -- country_code:     Code of the associated Country
 * -- contact_tourism   Tel. number of the tourism office of the Resort
 * -- contact_lifts     Tel. number of the lifts company of the Resort
 *
 * Belongs to: 
 * -- Country
 *
 * Has one:
 * -- Profile Picture
 *
 * Has many:
 * -- Webcams
 * -- Pictures
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Resort', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'name', type: 'string' }, 
			{ name: 'boundaries', type: 'string' }, 
			{ name: 'description', type: 'string'},
			{ name: 'pisteskm', type: 'float'},
			{ name: 'liftsnumber', type: 'int'},
			{ name: 'seasonstart', type: 'date'},
			{ name: 'seasonend', type: 'date'},
			{ name: 'openfrom', type: 'int'},
			{ name: 'openuntil', type: 'int'},
			{ name: 'website', type: 'string'},
			{ name: 'country_code', type: 'string' },
			{ name: 'contact_tourism', type: 'string'},
			{ name: 'contact_lifts', type: 'string'}
		],
		validations : [{
            type : 'presence',
            name : 'name',
            message : "A name is required"
        }],
		idProperty: 'id',
		belongsTo: [{
			name:'country',
			instanceName:'country',
			model:'skiMe.model.Country',
			getterName:'getCountry',
			setterName:'setCountry',
			associationKey:'country',
			primaryKey: 'code',
			foreignKey: 'country_code'
		}],
		hasOne: [{
			name:'profilePicture',
			instanceName:'profilePicture',
			model:'skiMe.model.ProfilePicture',
			associationKey:'profilePicture',
			getterName: 'getProfilePicture',
			setterName: 'setProfilePicture'
		}],
		hasMany: [{
			name:'pictures',
			instanceName:'pictures',
			model:'skiMe.model.Picture',
			associationKey:'pictures'
		}, {
			name:'webcams',
			instanceName:'webcams',
			model:'skiMe.model.Webcam',
			associationKey:'webcams'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/resorts',
			reader: {
				type:'json',
				rootProperty: 'resort',
				successProperty: 'success'
			}
		}
	}
});