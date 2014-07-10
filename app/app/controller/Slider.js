/**
 * Slider Controlller
 * Manage the right and left slide effect
 *
 * @author Swarnendu De & René Grossmann
 * @source http://innofied.com/simplest-slide-navigation-with-sencha-touch-2-2/
 */

Ext.define('skiMe.controller.Slider', {
    extend: 'Ext.app.Controller',
    config: {
        isLeft: null,
        isRight: null,
        refs: {
            slider: 'sliderView',
            mapPanel: 'mapPanel',
            friendsPanel: 'friendsPanel',
            notifsPanel: 'notifsPanel',

            friendsBtn: 'button[name="friendsPanelBtn"]',
            notifsBtn: 'button[name="notifsPanelBtn"]',

            pathMenuItem: 'button[pathButtonType=menuitem]'
        },

        control: {
             friendsBtn: {
                tap: 'slideRight'
            },

            notifsBtn: {
                tap: 'slideLeft'
            },

            friendsPanel: {
                itemtap: function (list, index, target, record) {
                    this.slideRight();
                }
            },

            notifsPanel: {
                itemtap: function (list, index, target, record) {
                    this.slideLeft();
                }
            }
        }
    },

    /**
    * On click on the 'friendslist' button, slide the map on the right, if it is already slided, slide it back
    */
    slideRight: function () {

        var mapElement = this.getMapPanel().element;

        this.getFriendsPanel().show();
        this.getNotifsPanel().hide();

        if (mapElement.hasCls('outRight')){
            mapElement.removeCls('outRight').addCls('inRight');
        } else if(mapElement.hasCls('inLeft')){
            mapElement.removeCls('inLeft').addCls('outRight');
        } else {
            mapElement.removeCls('inRight').addCls('outRight');
        }
    },

    /**
     * On click on the 'notifsList' button, slide the map on the left, if it is already slided, slide it back
     */
    slideLeft: function () {

        var mapElement = this.getMapPanel().element;

        this.getNotifsPanel().show();
        this.getFriendsPanel().hide();

        if (mapElement.hasCls('outLeft')){
            mapElement.removeCls('outLeft').addCls('inLeft');
        } else if(mapElement.hasCls('inRight')){
            mapElement.removeCls('inRight').addCls('outLeft');
        } else {
            mapElement.removeCls('inLeft').addCls('outLeft');
        }
    },
});