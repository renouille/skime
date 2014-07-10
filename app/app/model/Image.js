/**
 * Model to manage the Image informations
 * 
 * Fields:
 * -- id:  Id of the Image
 * -- url: Title of the Image
 *
 * @author René Grossmann
 */

Ext.define('skiMe.model.Image', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', type: 'int' }, 
			{ name: 'url', type: 'string' }, 
		],
		validations : [{
            type : 'url',
            name : 'url',
            message : "A valid image url is required"
        }],
		idProperty: 'id'
	}
});