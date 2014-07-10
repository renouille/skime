/**
 * List displaying the selected Friends
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.AddedFriendList', {
    extend: 'Ext.dataview.List',
    xtype: 'addedFriendList',
    config: {
        width: '80%',
        itemId: 'addedFriendList',
        store: 'addedFriendStore',
        disableSelection: true,
        itemHeight: 60,
        scrollable: false,
        height: 0,
        itemTpl: [
            '<div class="sm-listItem">',
                '<tpl if="profilePicture !== null">',
                    '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'{profilePicture.url_thumbnail}" />',
                '<tpl else>',
                    '<img class="list-profilePic" src="'+skiMe.config.Config.getSkimeUrl()+'/files/img/default/dflt_thumb.jpg" />',
                '</tpl>',
                '<span class="list-name">{name}</span>',
                '<span class="list-status">{status}</span>',
            '</div>'
        ]
    },

    /**
     * Increase the height of the list by 70px to display a new item
     */
    increaseAddedFriendListHeight: function() {
        var newHeight = this.getHeight()+70;
        console.log(newHeight);
        this.setHeight(newHeight);
    }
});
