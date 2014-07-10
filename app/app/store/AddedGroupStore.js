/**
 * Store to manage the Groups added to a Meeting Point
 * Type: Memory
 *
 * @autor René Grossmann
 */

Ext.define('skiMe.store.AddedGroupStore', {
	extend: 'Ext.data.Store',
	xtype: 'addedGroupStore',
	config: {
		model: 'skiMe.model.Group',
		storeId: 'addedGroupStore',
		proxy: {
			type: 'memory',
			rootProperty: 'group'
		},
	}
});