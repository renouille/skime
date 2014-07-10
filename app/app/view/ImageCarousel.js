/**
 * Carousel of images to display webcams
 *
 * @author René Grossmann
 */

Ext.define('skiMe.view.ImageCarousel', {
	extend : 'Ext.carousel.Carousel',
	xtype : 'imageCarousel',
	requires : ['Ext.TitleBar'],
	config : {
        itemId: 'imageCarousel',
    		fullscreen : true,
    		modal : true,
    		cls : 'carousel',
    		showAnimation : 'popIn',
    		hideAnimation : 'popOut',
    		indicator : false,
        images: [],
        items: [{
            xtype: 'button',
            itemId: 'carouselCloseBtn',
            iconCls: 'remove',
            top: 10,
            right: 0,
            ui: 'plain',
            cls: 'sm-titlebar-button',
            hideOnMaskTap: false
        }, {
            xtype: 'label',
            itemId: 'carouselTitleLabel',
            top: 15,
            left: 10,
            cls: 'sm-carousel-label',
            html: ''
        }, {
            xtype : 'titlebar',
            itemId: 'carouselTitlebar',
            title : '',
            docked : 'bottom',
            cls : 'carousel-bottombar',
            items : [{
                xtype : 'button',
                itemId: 'carouselLeftBtn',
                align : 'left',
                iconCls : 'chevron-left',
                ui : 'plain',
                cls: 'sm-titlebar-button'
            }, {
                xtype : 'button',
                itemId: 'carouselRightBtn',
                align : 'right',
                iconCls : 'chevron-right',
                ui : 'plain',
                cls: 'sm-titlebar-button'
            }]
        }],
        listeners: [{
            delegate: '#carouselLeftBtn',
            event: 'tap',
            fn: 'onCarouselLeftBtnTap'
        }, {
            delegate: '#carouselRightBtn',
            event: 'tap',
            fn: 'onCarouselRightBtnTap'
        }, {
            delegate: '#carouselCloseBtn',
            event: 'tap',
            fn: 'onCarouselCloseBtnTap'
        }, {
            event: 'activeitemchange',
            fn: 'onActiveItemChange'
        }]
	},
	
    /**
     * Initialize the component and add all images to the carousel
     * @return {[type]} [description]
     */
	initialize : function(){

        var imageCarousel = this;
        var imageStore = this.getImages();

        imageStore.each(function(image) {
            imageCarousel.add({
                xtype: 'image',
                baseCls: 'carousel-item',
                src: image.get('url'),
                title: image.get('title'),
                index: imageStore.indexOf(image)
            });
        });
							
		this.callParent(arguments);
	},
	
    /**
    * Update the title of the image and the image counter
    * @param {Ext.carousel.Carousel} Carousel which item changed
    * @param {Ext.Img} panel Active panel containing the image
    */
    onActiveItemChange: function(carousel, image){

        this.down('#carouselTitlebar').setTitle(image.config.index+1 + ' of ' + this.getImages().getAllCount());

        this.down('#carouselTitleLabel').setHtml(image.config.title);
    },

    /**
     * Hide the carousel and destroy it when the "close" button is tapped
     */
    onCarouselCloseBtnTap: function() {
        this.hide();
        this.onAfter('hide', function() {
            this.destroy();
        });
    }, 

    /**
     * Active the next item of the carousel when the "right" button is tapped
     */
    onCarouselRightBtnTap: function() {
        this.next();
    },

    /**
     * Active the previous item of the carousel when the "left" button is tapped
     */
    onCarouselLeftBtnTap: function() {
        this.previous();
    }
});
