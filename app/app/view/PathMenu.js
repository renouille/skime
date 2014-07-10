/**
 *  Menu buttons insired by the "Path" application
 *  @author: Bruno Tavares / Modified by René Grossmann
 *  @source: https://github.com/brunotavares/SenchaExamples/tree/master/touch/native-to-web-path-menu
 */

Ext.define('skiMe.view.PathMenu',{
    extend: 'Ext.Panel',
    xtype: 'pathmenu',
    config: {
        cls: Ext.baseCSSPrefix + 'pathmenu',
        items: [{
            xtype: 'container',
            cls: Ext.baseCSSPrefix + 'pathmenu-body',
            defaultType: 'button',
            items: [{
                ui: 'path',
                itemId: 'mainButton',
                text: '+',
            },{
				iconCls: 'param',
                itemId: 'paramButton'
			},{
				iconCls: 'comment',
                itemId: 'statusButton'
			},{
				
                iconCls: 'group',
                itemId: 'newGroupButton'
			}, {
				iconCls: 'direction',
                itemId: 'navigationButton'
			},{
				iconCls: 'location',
                itemId: 'locationButton'
            }]
        }],
        listeners: [{
            delegate: '#mainButton',
            event: 'tap',
            fn: 'onMainButtonTap'
        }, {
            delegate: '#paramButton',
            event: 'tap',
            fn: 'onParamButtonTap'
        }, {
            delegate: '#newGroupButton',
            event: 'tap',
            fn: 'onNewGroupButtonTap'
        }, {
            delegate: '#statusButton',
            event: 'tap',
            fn: 'onStatusButtonTap'
        }, {
            delegate: '#navigationButton',
            event: 'tap',
            fn: 'onNavigationButtonTap'
        }, {
            delegate: '#locationButton',
            event: 'tap',
            fn: 'onLocationButtonTap'
        }]
    },
    
    /**
     * Display or hide the 5 buttons with animation
     * @param  {Ext.Button} btn Main button of the Path style menu
     */
    onMainButtonTap: function(btn) {
        var pressedCls = Ext.baseCSSPrefix + 'button-pressed';
        
        btn.pressed = !btn.pressed;
        
        if (btn.pressed) {
            btn.addCls(pressedCls);
            this.fanOut();
        }
        else {
            btn.removeCls(pressedCls);
            this.fanIn();
        }
    },

    /**
     * Fires an event to notify the "parameter" button was tapped
     */
    onParamButtonTap: function() {
        this.fireEvent('paramsTap');
    },

    /**
     * Fires an event to notify the "create Group" button was tapped
     */
    onNewGroupButtonTap: function() {
        this.fireEvent('newGroupTap');
    },

    /**
     * Fires an event to notify the "update Status" button was tapped
     */
    onStatusButtonTap: function() {
        this.fireEvent('statusTap');
    },

    /**
     * Fires an event to notify the "Start navigation" button was tapped
     */
    onNavigationButtonTap: function() {
        this.fireEvent('navigationTap');
    },

    /**
     * Fires an event to notify the "checkin" button was tapped
     */
    onLocationButtonTap: function() {
        this.fireEvent('checkinTap');
    },
    
    /**
     * Set up the "fan out" animation to display
     */
    fanOut:  function() {
        this.getComponent(0).items.each(this.fanOutItem, this);
    },
    
    /**
     * Set up the "fan in" animation to display
     */
    fanIn:  function() {
        this.getComponent(0).items.each(this.fanInItem, this);
    },
    
    //@private
    fanOutItem: function(item, index, len) {
        var angle, rad, sin, cos, x, y, style, difCenter,
            arc     = 90,
            distance= 150;
        
        //ignore main button
        if (index === 0) {
            return;
        }
        index--;
        len--;
        
        //calculate angle using items count
        if (len === 1) {
            angle = 0;
        }
        else {
            angle = (arc/(len-1)) * index;
        }
        
        //transform angle to rad
        rad = angle * Math.PI/180;
        
        //calculate cos and sin
        cos = Math.cos(rad);
        sin = Math.sin(rad);
        
        //find x,y using distance
        x = Math.ceil(distance * cos);
        y = Math.ceil(distance * sin * -1);
        
        style = {
            '-webkit-transition-delay': (30 * index) + 'ms',
            '-webkit-transform': 'translate3d('+x+'px, '+y+'px, 0)',
            'transition-delay': (30 * index) + 'ms',
            'transform': 'translate3d('+x+'px, '+y+'px, 0)'
        };
        
        if (!item.rendered) {
            item.style = style;
        }
        else {
            item.element.applyStyles(style);
        }
    },
    
    //@private
    fanInItem: function(item, index, len) {
        //ignore main button
        if (index === 0) {
            return;
        }
        
        var style = {
            '-webkit-transition-delay': (30 * index) + 'ms',
            '-webkit-transform': 'translate3d(0px, 0px, 0)',
            'transition-delay': (30 * index) + 'ms',
            'transform': 'translate3d(0px, 0px, 0)'
        };
        
        if (!item.rendered) {
            item.style = style;
        }
        else {
            item.element.applyStyles(style);
        }
    }
});