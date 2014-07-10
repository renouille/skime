/**
 * Configuration file of the skiMe application
 * Defines connection constants and valid HTTP headers
 * 
 * @author René Grossmann
 */

Ext.define('skiMe.config.Config', {
    singleton: true,

    config: {
        //Webservices URL
        //OGO : ogo.heig-vd.ch/tb_projects/skime/server
        //wamp: 192.168.0.17/skime/server
        webservices: 'http:///10.192.81.72/skime/server',

        //Websockets URL
        websockets: 'http://10.192.81.72/skime/server/websockets',

        //skiMe URL
        skimeUrl: 'http://10.192.81.72/skime'
    },

    constructor: function(config) {
        this.initConfig(config);

        Number.prototype.pad = function (len) {
            return (new Array(len+1).join("0") + this).slice(-len);
        }
        
        return this;
    },

    isWebApp: function() {
        if(document.URL.indexOf('http') != -1) {
            return true;
        }
        return false;
    },

    /**
     * Build a valid HTTP Header for the communication with the REST webservices
     * Header parameters :
     * -- SM-userId: Id of the connected user
     * -- SM-timestamp: Timestamp of the request
     * -- SM-authToken: Authentication token of the connected user
     * @return Array Valid HTTP header
     */
    getSMHeaders: function() {

        var authStore = Ext.getStore('authStore');

        var headers = {
            'SM-userId': authStore.getById(1).get('user_id'),
            'SM-timestamp': Math.round(Date.now() / 1000),
            'SM-authToken': authStore.getById(1).get('authToken'),     
            'Accept' : 'application/json'                 
        }

        return headers;
    }
});