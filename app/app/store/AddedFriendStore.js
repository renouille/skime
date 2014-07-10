/**
 * Store to manage the friends added to a Group or a Meeting Point
 * Type: Memory
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.AddedFriendStore', {
	extend: 'Ext.data.Store',
	xtype: 'addedFriendStore',
	config: {
		model: 'skiMe.model.User',
		storeId: 'addedFriendStore',
		proxy: {
			type: 'memory',
			rootProperty: 'friend'
		},
	}
});