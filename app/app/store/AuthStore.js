/**
 * Store to manage the sessions of a User
 * Type: LocalStorage
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.AuthStore', {
	extend: 'Ext.data.Store',
	xtype: 'authStore',
	requires: [
		'Ext.data.proxy.LocalStorage'
	],
	config: {
		autoload: true,
		autoSync: true,
		model: 'skiMe.model.Auth',
		storeId: 'authStore'
	}
});