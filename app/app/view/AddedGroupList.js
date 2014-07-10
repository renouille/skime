/**
 * List displaying the selected Groups
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.AddedGroupList', {
    extend: 'Ext.dataview.List',
    xtype: 'addedGroupList',
    config: {
        width: '80%',
        itemId: 'addedGroupList',
        store: 'addedGroupStore',
        disableSelection: true,
        itemHeight: 60,
        scrollable: false,
        height: 0,
        itemTpl: [
            '<div class="sm-listItem">',
                '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/group.jpg" />',
                '<span class="list-name">{name}</span>',
            '</div>'
        ]
    },

    /**
     * Increase the height of the list by 70px to display a new item
     */
    setAddedGroupListHeight: function() {
        var newHeight = this.getHeight()+70;
        console.log(newHeight);
        this.setHeight(newHeight);
    }
});
