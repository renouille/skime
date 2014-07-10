/**
 * Wraps a Leaflet map in an {@link Ext.Component} using the [Leaflet API](http://leafletjs.com/reference.html).
 * @author: Jürg Hunziker
 * @source: https://github.com/tschortsch/Ext.ux.LeafletMap
 */
Ext.define('Ext.ux.LeafletMap', {
    extend: 'Ext.Container',
    xtype: 'leafletmap',
    requires: ['Ext.util.Geolocation'],

    config: {
        /**
         * @event maprender
         * Fired when map is initially rendered.
         * @param {Ext.ux.LeafletMap} this
         * @param {L.Map} map The rendered L.Map instance
         * @param {L.TileLayer} tileLayer The rendered L.TileLayer instance
         */

        /**
         * @event zoomend
         * Fired when a map zoom ended.
         * @param {Ext.ux.LeafletMap} this
         * @param {L.Map} map The rendered L.Map instance
         * @param {L.TileLayer} tileLayer The rendered L.TileLayer instance
         * @param {Number} zoom The current zoom level of the map
         */

        /**
         * @event movestart
         * Fired when a panning on map starts.
         * @param {Ext.ux.LeafletMap} this
         * @param {L.Map} map The rendered L.Map instance
         * @param {L.TileLayer} tileLayer The rendered L.TileLayer instance
         */

        /**
         * @event moveend
         * Fired when a panning on map ends.
         * @param {Ext.ux.LeafletMap} this
         * @param {L.Map} map The rendered L.Map instance
         * @param {L.TileLayer} tileLayer The rendered L.TileLayer instance
         */

        /**
         * @cfg {String} baseCls
         * The base CSS class to apply to the map's element
         * @accessor
         */
        baseCls: Ext.baseCSSPrefix + 'llmap',

        /**
         * @cfg {Boolean/Ext.util.Geolocation} useCurrentLocation
         * Pass in true to center the map based on the geolocation coordinates or pass a
         * {@link Ext.util.Geolocation GeoLocation} config to have more control over your GeoLocation options
         * @accessor
         */
        useCurrentLocation: false,

        /**
         * @cfg {L.Map} map
         * The wrapped map.
         * @accessor
         */
        map: null,

        /**
         * @cfg {Object} mapOptions
         * MapOptions as specified by the Leaflet documentation:
         * [http://leaflet.cloudmade.com/reference.html#map-options](http://leaflet.cloudmade.com/reference.html#map-options)
         * @accessor
         */
        mapOptions: {},

        /**
         * @cfg {String} [tileLayerUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"]
         * URL template for tile-layer in the following form
         * 
         *     'http://{s}.somedomain.com/blabla/{z}/{x}/{y}.png'
         * 
         * {s} means one of the randomly chosen subdomains (their range is specified in options; a, b or c by default, 
         * can be omitted), {z} — zoom level, {x} and {y} — tile coordinates.
         * 
         * You can use custom keys in the template, which will be evaluated from {@link Ext.ux.LeafletMap#tileLayerOptions}, like this:
         * 
         *     tileLayerUrl: 'http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', tileLayerOptions: {foo: 'bar'};
         * 
         * @accessor
         */
        tileLayerUrl: 'http://{s}.tiles.mapbox.com/v3/renouille.map-pyehlb5k/{z}/{x}/{y}.png',

        /**
         * @cfg {Object} tileLayerOptions
         * Tile-layer options which should be used in the L.TileLayer constructor.
         * @accessor
         */
        tileLayerOptions: {},

        /**
         * @cfg {L.TileLayer} tileLayer
         * The wrapped layer.
         * @accessor
         */
        tileLayer: null,

        /**
         * @cfg {L.LayerGroup pisteFeatureGroup
         * Layer grouping all pistes
         * @accessor
         */
        pisteFeatureGroup: null,

        /**
         * @cfg {L.LayerGroup liftFeatureGroup
         * Layer grouping all lifts
         * @accessor
         */
        liftFeatureGroup: null,

        /**
         * @cfg {L.LayerGroup meetingPointLayerGroup
         * Layer grouping all meeting points
         * @accessor
         */
        meetingPointLayerGroup: null,

        /**
         * @cfg {L.LayerGroup friendLayerGroup
         * Layer grouping all friends
         * @accessor
         */
        friendLayerGroup: null,

        /**
         * @cfg {L.LayerGroup webcamLayerGroup
         * Layer grouping all webcams
         * @accessor
         */
        webcamLayerGroup: null,

        /**
         * @cfg {Ext.util.Geolocation} geo
         * Geolocation provider for the map.
         * @accessor
         */
        geo: null,

        /**
         * @cfg {Boolean} autoMapCenter
         * Defines if the map should automatically center itself on a geoupdate event.
         * Only applies if {@link Ext.ux.LeafletMap#useCurrentLocation} is set to true.
         * @accessor
         */
        autoMapCenter: false,

        /**
         * @cfg {Boolean} initialCenter
         * Defines if the map initially should be centered to the current location.
         * @accessor
         */
        initialCenter: false,

        /**
         * @cfg {Boolean} enableOwnPositionMarker
         * Defines if a marker should be placed on the current position.
         * This marker automatically updates its position on a location update event.
         * Only works if useCurrentLocation is set to true.
         * @accessor
         */
        enableOwnPositionMarker: false,

        /**
         * @cfg {L.Marker} ownPositionMarker
         * Marker object which shows the current location.
         * @accessor
         */
        ownPositionMarker: null,

        /**
         * @cfg {Object} ownPositionMarkerIcon
         * Options for the icon of own position marker.
         * See [L.Icon](http://leafletjs.com/reference.html#icon) documentation for possible options.
         * @accessor
         */
        ownPositionMarkerIcon: null,

        /**
         * @cfg {L.Latlng} clickedLatLng
         * Latitude and Longitude of the clicked position on the map
         * @accessor
         */
        clickedLatLng: null
    },

    constructor: function () {
        this.callParent(arguments);

        var ll = window.L;

        if (!ll) {
            this.setHtml('Leaflet library is required');
        }
    },

    initialize: function () {
        this.callParent();
        this.on({
            painted: 'doResize',
            scope: this
        });
        this.innerElement.on('touchstart', 'onTouchStart', this);
    },

    getElementConfig: function () {
        return {
            reference: 'element',
            className: 'x-container',
            children: [{
                reference: 'innerElement',
                className: 'x-inner',
                children: [{
                    reference: 'mapContainer',
                    className: Ext.baseCSSPrefix + 'map-container'
                }]
            }]
        };
    },

    onTouchStart: function (e) {
        e.makeUnpreventable();
    },

    applyMapOptions: function (options) {
        return Ext.merge({}, this.options, options);
    },

    updateMapOptions: function (newOptions) {
        var me = this,
            ll = window.L,
            map = this.getMap();

        if (ll && map) {
            map.setOptions(newOptions);
        }
        if (newOptions.center && !me.isPainted()) {
            me.un('painted', 'setMapCenter', this);
            me.on('painted', 'setMapCenter', this, { delay: 150, single: true, args: [newOptions.center] });
        }
    },

    getMapOptions: function () {
        return Ext.merge({}, this.options || this.getInitialConfig('mapOptions'));
    },

    getTileLayerOptions: function () {
        return Ext.merge({}, this.options || this.getInitialConfig('tileLayerOptions'));
    },

    updateUseCurrentLocation: function (useCurrentLocation) {
        this.setGeo(useCurrentLocation);
        if (!this.getMap() && (!useCurrentLocation || !this.getInitialCenter())) {
            this.renderMap();
        }
    },

    applyGeo: function (config) {
        return Ext.factory(config, Ext.util.Geolocation, this.getGeo());
    },

    updateGeo: function (newGeo, oldGeo) {
        var events = {
            locationupdate : 'onGeoUpdate',
            locationerror : 'onGeoError',
            scope : this
        };

        if (oldGeo) {
            oldGeo.un(events);
        }

        if (newGeo) {
            newGeo.on(events);
            newGeo.updateLocation();
        }
    },

    doResize: function () {
        var ll = window.L,
            map = this.getMap();

        if (ll && map) {
            map.invalidateSize();
        }
    },

    // @private
    renderMap: function () {
        var me = this,
            ll = window.L,
            element = me.mapContainer,
            mapOptions = me.getMapOptions(),
            map,
            tileLayer;

        // if map isn't painted yet -> recall method after a certain time
        if (!me.isPainted()) {
            me.un('painted', 'renderMap', this);
            me.on('painted', 'renderMap', this, { delay: 150, single: true, args: [] });
            return;
        }

        if (ll) {
            if (element.dom.firstChild) {
                Ext.fly(element.dom.firstChild).destroy();
            }

            // if no center property is given -> use default position
            if (!mapOptions.hasOwnProperty('center') || !(mapOptions.center instanceof ll.LatLng)) {
                mapOptions.center = new ll.LatLng(46.3, 7.07); // default: Villars-Gryon
            }

            me.setTileLayer(new ll.TileLayer(me.getTileLayerUrl(), me.getTileLayerOptions()));
            tileLayer = me.getTileLayer();
            mapOptions.layers = [tileLayer];

            me.setMap(new ll.Map(element.dom, mapOptions));
            map = me.getMap();

            //Creation of the layers
            this.setPisteFeatureGroup(new L.FeatureGroup());
            this.setLiftFeatureGroup(new L.FeatureGroup());
            this.setMeetingPointLayerGroup(new L.LayerGroup());
            this.setFriendLayerGroup(new L.LayerGroup());
            this.setWebcamLayerGroup(new L.LayerGroup());

            this.getPisteFeatureGroup().addTo(map);
            this.getLiftFeatureGroup().addTo(map);
            this.getMeetingPointLayerGroup().addTo(map)
            this.getFriendLayerGroup().addTo(map)
            this.getWebcamLayerGroup().addTo(map)

            // add own position marker if enabled
            if(me.getGeo() && me.getEnableOwnPositionMarker()) {
                me.addOwnPositionMarker();
            }

            // track map events
            map.on('zoomend', me.onZoomEnd, me);
            map.on('movestart', me.onMoveStart, me);
            map.on('moveend', me.onMoveEnd, me);
            me.fireEvent('maprender', me, map, tileLayer);
        }
    },

    // @private
    onGeoUpdate: function (geo) {
        var ll = window.L,
            ownPositionMarker = this.getOwnPositionMarker();

        if (ll && geo && (this.getAutoMapCenter() || this.getInitialCenter())) {
            this.setMapCenter(new ll.LatLng(geo.getLatitude(), geo.getLongitude()));
            this.setInitialCenter(false);
        }
        if(ownPositionMarker) {
            ownPositionMarker.setLatLng(L.latLng(geo.getLatitude(), geo.getLongitude()));
            this.fireEvent('updatePosition', geo);
        } 
    },

    // @private
    onGeoError: function (geo) {
        this.setUseCurrentLocation(false);
        if(!this.getMap()) {
            this.renderMap();
        }
    },

    /**
     * Moves the map center to the designated coordinates hash of the form:
     *
     *     { latitude: 47.36865, longitude: 8.539183 }
     *
     * or a L.LatLng object representing to the target location.
     *
     * @param {Object/L.LatLng} coordinates Object representing the desired longitude and
     * latitude upon which to center the map.
     */
    setMapCenter: function (coordinates) {
        var me = this,
            map = me.getMap(),
            ll = window.L;

        if (ll) {
            if (!me.isPainted()) {
                me.un('painted', 'setMapCenter', this);
                me.on('painted', 'setMapCenter', this, { delay: 150, single: true, args: [coordinates] });
                return;
            }

            coordinates = coordinates || new ll.LatLng(47.36865, 8.539183);

            if (coordinates && !(coordinates instanceof ll.LatLng) && coordinates.hasOwnProperty('latitude')) {
                coordinates = new ll.LatLng(coordinates.latitude, coordinates.longitude);
            }

            if (!map) {
                me.renderMap();
                map = me.getMap();
            }

            if (map && coordinates instanceof ll.LatLng) {
                map.panTo(coordinates);
            } else {
                this.options = Ext.apply(this.getMapOptions(), {
                    center: coordinates
                });
            }
        }
    },

    // @private
    onZoomEnd: function () {
        var mapOptions = this.getMapOptions(),
            map = this.getMap(),
            tileLayer = this.getTileLayer(),
            zoom;

        zoom = map.getZoom() || 10;

        this.options = Ext.apply(mapOptions, {
            zoom: zoom
        });

        this.fireEvent('zoomend', this, map, tileLayer, zoom);
    },

    // @private
    onMoveStart: function () {
        var map = this.getMap(),
            tileLayer = this.getTileLayer();

        this.fireEvent('movestart', this, map, tileLayer);
    },

    // @private
    onMoveEnd: function () {
        var map = this.getMap(),
            tileLayer = this.getTileLayer();

        this.fireEvent('moveend', this, map, tileLayer);
    },

    // @private
    destroy: function () {
        Ext.destroy(this.getGeo());
        var map = this.getMap(),
            layer = this.getTileLayer();

        if (map) {
            map = null;
        }
        if (layer) {
            layer = null;
        }

        this.callParent();
    },

    /**
     * Add a piste to the pistes layer on the map
     * Sets the colour of the piste according to his difficulty and bind a popup to show his informations
     * @param  {JSON} geoJSON Decoded geoJSON of the piste, containing the properties and the geometry of the feature
     */
    addPiste: function(geoJSON) {

        var leafletmap = this;
        var map = this.getMap();
        var pisteFeatureGroup = this.getPisteFeatureGroup();

        var pisteStyle = {
            color: "#000000",
            weight: 1,
            opacity: 1,
            fillColor: "587bb3",
            fillOpacity: 0.35,
            noClip: true
        };

        switch(geoJSON.properties["piste:difficulty"]) {
            case 'novice': 
                pisteStyle.fillColor = "#00cc00";
                break;
            case 'easy': 
                pisteStyle.fillColor = "#0000ff";
                break;
            case 'intermediate':   
                pisteStyle.fillColor = "#ff0000";
                break;
            case 'advanced':   
                pisteStyle.fillColor = "#333333";
                break;
            case 'expert':   
                pisteStyle.fillColor = "#0000ff";
                break;
            case 'freeride':   
                pisteStyle.fillColor = "#0000ff";
                break;
            case 'extreme':   
                pisteStyle.fillColor = "#0000ff";
                break;
        }         

        piste = L.geoJson(geoJSON); 
        piste.setStyle(pisteStyle);

        //Building of the popup 
        var content = document.createElement('DIV');
        var table = document.createElement('TABLE');
        table.innerHTML = 
            '<table>'+
                '<tr><td><i class="icon-tag"></i></td><td>'+geoJSON.properties['piste:name']+'</td></tr>'+
                '<tr><td><i class="icon-star"></i></td><td>'+geoJSON.properties['piste:difficulty']+'</td></tr>'+
                '<tr><td><i class="icon-resize-vertical"></i></td><td>'+Math.round((geoJSON.properties['distance']/1000)*10)/10+' km</tb></tr>'+
                '<tr><td><i class="icon-road"></i></td><td>'+geoJSON.properties['piste:type']+'</tb></tr>'+
            '</table>';

        var meetingBtn = document.createElement('SPAN');
        meetingBtn.innerHTML = '<span class="popupBtn icon-stack"><i id="meetingBtn" class="icon-circle icon-stack-base"></i><i class="icon-flag icon-light"></i></span>';
        meetingBtn.onclick = function() {
            leafletmap.fireEvent('meetingPointBtnTap');
        }

        var navBtn = document.createElement('SPAN');
        navBtn.innerHTML = '<span id="navigationBtn" class="popupBtn icon-stack"><i class="icon-circle icon-stack-base"></i><i class="icon-location-arrow icon-light"></i></span>';
        navBtn.onclick = function() {
            console.log("Feature not ready yet.");
        }

        content.appendChild(table);
        content.appendChild(meetingBtn);
        content.appendChild(navBtn);

        piste.bindPopup(content, {closeButton: false});

        piste.on('popupopen', function(event) {
            event.target.setStyle({weight: 2});
        });

        piste.on('popupclose', function(event) {
            event.target.setStyle({weight: 1});
        });

        piste.on('click', function(event) {
            leafletmap.setClickedLatLng(event.latlng);
        });

        pisteFeatureGroup.addLayer(piste);
        pisteFeatureGroup.bringToBack();

        console.log("piste added to map");
    },

    /**
     * Add a lift to the lifts layer on the map
     * @param  {JSON} geoJSON Decoded geoJSON of the lift, containing the properties and the geometry of the feature
     */
    addLift: function(geoJSON) {
        
        var liftFeatureGroup = this.getLiftFeatureGroup();

        var liftStyle = {
            "color": "#000000",
            "opacity": 1,
            "weight": 1.5,
            "dashArray": "5,5",
            noClip: true
        };

        lift = L.geoJson(geoJSON);
        lift.setStyle(liftStyle);
        liftFeatureGroup.addLayer(lift);
        liftFeatureGroup.bringToFront();

        console.log("Lift added to map");
    },

    /**
     * Adds a meeting point to the meeting point layer on the map
     * @param  {Object} mpPosition LatLng Object of the Meeting Point
     * @param  {string} mpOwner    Name of the User who created the Meeting Point
     * @param  {string} mpComments Comments of the Meeting Point
     * @param  {string} mpDate     String formated date of the Meeting Point
     * @param  {string} mpTime     String formated time of the Meeting Point
     */
    addMeetingPoint: function(mpPosition, mpOwner, mpComments, mpDate, mpTime) {

        var meetingPointLayerGroup = this.getMeetingPointLayerGroup();
        
        icon = L.AwesomeMarkers.icon({
            icon: 'flag',
            color: 'orange'
        });
        
        mpMarker = L.marker([mpPosition.lat, mpPosition.lng], {icon: icon});

        var content = document.createElement('DIV');
        var table = document.createElement('TABLE');
        table.innerHTML = 
            '<table>'+
                '<tr><td><i class="icon-calendar"></i></td><td>'+mpDate+'</td></tr>'+
                '<tr><td><i class="icon-time"></i></td><td>'+mpTime+'</td></tr>'+
                '<tr><td><i class="icon-key"></i></td><td>'+mpOwner+'</td></tr>';

        //If no comments, do not add the "comments" icon
        if(mpComments != '') {
            table.innerHTML += '<tr><td><i class="icon-quote-left"></i></td><td>'+mpComments+'</td></tr></table>';
        } else {
            table.innerHTML += '</table>';
        }

        content.appendChild(table);

        mpMarker.bindPopup(content, {closeButton: false});

        meetingPointLayerGroup.addLayer(mpMarker);
    },

    /**
     * Adds own position marker to map
     * @param  {string} Url of the profile picture of the user
     * @return {latlng} Latitude and longitude of marker
     */
    addOwnPositionMarker: function(userPicture) {
       
        var ownPositionMarker = this.getOwnPositionMarker();
        var geo = this.getGeo();
        var icon = null;

        if(ownPositionMarker != null) {
            this.getMap().removeLayer(ownPositionMarker);
        }

        icon = L.ImageMarkers.icon ({
            icon: userPicture, 
            color: 'blue',
            labelAnchor: [8, -15]
        });

        ownPositionMarker = L.marker([geo.getLatitude(), geo.getLongitude()], {icon: icon});
        ownPositionMarker.bindLabel('Me');
        this.setOwnPositionMarker(ownPositionMarker);
        ownPositionMarker.addTo(this.getMap());
        return geo;
    },

    /**
     * Adds a marker on the position of a Friend to the friends layer on the map
     * @param  {Object} friendPosition LatLng of the Friend
     * @param  {string} friendName     Name of the Friend
     * @param  {string} friendPicture  URL of the profile picture thumbnail
     * @param  {string} markerColor    Color of the marker
     * @return {L.marker} Marker added to the map
     */
    addFriendMarker: function(friendPosition, friendName, friendPicture, markerColor) {

        var friendLayerGroup = this.getFriendLayerGroup();
        
        var icon = L.ImageMarkers.icon ({
            icon: friendPicture, 
            color: markerColor,
            labelAnchor: [8, -15]
        });
        
        friendMarker = L.marker([friendPosition.lat, friendPosition.lng], {icon: icon});

        friendMarker.bindLabel(friendName);

        friendLayerGroup.addLayer(friendMarker);

        return friendMarker;
    },

    /**
     * Remove the marker of a friend of the friends layer
     * @param  {L.marker} marker Marker to remove
     */
    removeFriendMarker: function(marker) {
        this.getFriendLayerGroup().removeLayer(marker);
    },

    /**
     * Add a webcam on the map to the given position
     * @param  {array} position Latitude and longitude of the webcam marker
     * @return {L.marker} Marker of the webcam added on the map
     */
    addWebcam: function(position) {

        var webcamLayerGroup = this.getWebcamLayerGroup();
        
        var icon = L.AwesomeMarkers.icon({
            icon: 'picture', 
            color: 'darkblue'
        });
        
        webcamMarker = L.marker([position.lat, position.lng], {icon: icon});

        webcamLayerGroup.addLayer(webcamMarker);

        return webcamMarker;
    }
});