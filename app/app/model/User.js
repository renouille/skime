/**
 * Model to manage the User informations
 * 
 * Fields:
 * -- id:               Id of the User
 * -- email:            Email of the User
 * -- name:             Name of the User
 * -- gender:           Gender of the User
 * -- sport:            Sport type of the User
 * -- stype:            Ride style of the User
 * -- favresort:        Favorite resort of the User
 * -- status:           Status of the resort
 * -- topspeed:         Top speed of the User
 * -- distancetraveled: Total distance traveled by the User
 * -- birthday:         Birthday date of the User
 * -- country_code:     Code of the associated Country
 *
 * Belongs to: 
 * -- Country
 *
 * Has one:
 * -- Checkin
 * -- Profile Picture
 *
 * Has many:
 * -- Notifications
 * -- GroupMembers
 * -- FriendShips
 * -- Pictures
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.User', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'email', type: 'string' }, 
			{ name: 'name', type: 'string' }, 
			{ name: 'gender', type: 'string'},
			{ name: 'sport', type: 'string'},
			{ name: 'style', type: 'string'},
			{ name: 'favresort', type: 'string'},
			{ name: 'status', type: 'string'},
			{ name: 'topspeed', type: 'int'},
			{ name: 'distancetraveled', type: 'int'},
			{ name: 'birthday', type: 'date'},
			{ name: 'country_code', type: 'string' },
		],
		validations : [{
            type : 'presence',
            name : 'email',
            message : "An email is required"
        }, {
            type : 'presence',
            name : 'password',
            message : "A password is required"
        }, {
            type : 'presence',
            name : 'name',
            message : "A name is required"
        }, {
            type : 'format',
            name : 'email',
            matcher : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message : "Email is not valid"
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
			name: 'checkin',
			instanceName: 'checkin',
			model: 'skiMe.model.Checkin',
			getterName: 'getCheckin',
			setterName: 'setCheckin',
			associationKey: 'checkin'
		}, {
			name:'profilePicture',
			instanceName:'profilePicture',
			model:'skiMe.model.ProfilePicture',
			associationKey:'profilePicture',
			getterName: 'getProfilePicture',
			setterName: 'setProfilePicture'
		}],
		hasMany: [{	
			name:'notifications',
			instanceName:'notifications',
			model:'skiMe.model.UserNotification',
			associationKey:'notifications'
		}, {
			name:'groupMembers',
			instanceName:'groupMembers',
			model:'skiMe.model.GroupMember',
			associationKey:'groupMembers'
		} , {
			name:'friendships',
			instanceName:'friendships',
			model:'skiMe.model.Friendship',
			associationKey:'friendships',
		}, {
			name:'pictures',
			instanceName:'pictures',
			model:'skiMe.model.Picture',
			associationKey:'pictures'
		}],
		proxy: {
			type:'rest',
			url: skiMe.config.Config.getWebservices()+'/users',
			reader: {
				type:'json',
				rootProperty: 'user',
				successProperty: 'success'
			}
		}
	}
});