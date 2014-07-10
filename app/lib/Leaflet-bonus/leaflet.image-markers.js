/*
  Leaflet.image-markers is a plugin based on Leaflet.awesome-markers, to add image on colorful markers
  Author: René Grossmann
*/
(function (window, document, undefined) {
/*
 * Leaflet.imageMarkers assumes that you have already included the Leaflet library.
 */

L.ImageMarkers = {};

L.ImageMarkers.version = '1.0';

L.ImageMarkers.Icon = L.Icon.extend({
  options: {
    iconSize: [35, 45], 
    iconAnchor:   [17, 42],
    popupAnchor: [1, -32],
    shadowAnchor: [10, 12],
    shadowSize: [36, 16],
    className: 'awesome-marker',
    icon: 'user',
    color: 'blue',
    iconColor: 'white'
  },

  initialize: function (options) {
    options = L.setOptions(this, options);
  },

  createIcon: function () {
    var div = document.createElement('div'),
        options = this.options;

    if (options.icon) {
      div.innerHTML = this._createInner();
    }

    if (options.bgPos) {
      div.style.backgroundPosition =
              (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
    }

    this._setIconStyles(div, 'icon-' + options.color);
    return div;
  },

  _createInner: function() {
    var iconClass;

    iconClass=this.options.icon;
    
    return "<img class='imgRound' src='" + iconClass + "'></img>";
  },

  _setIconStyles: function (img, name) {
    var options = this.options,
        size = L.point(options[name == 'shadow' ? 'shadowSize' : 'iconSize']),
        anchor;

    if (name === 'shadow') {
      anchor = L.point(options.shadowAnchor || options.iconAnchor);
    } else {
      anchor = L.point(options.iconAnchor);
    }

    if (!anchor && size) {
      anchor = size.divideBy(2, true);
    }

    img.className = 'awesome-marker-' + name + ' ' + options.className;

    if (anchor) {
      img.style.marginLeft = (-anchor.x) + 'px';
      img.style.marginTop  = (-anchor.y) + 'px';
    }

    if (size) {
      img.style.width  = size.x + 'px';
      img.style.height = size.y + 'px';
    }
  },

  createShadow: function () {
    var div = document.createElement('div'),
        options = this.options;

    this._setIconStyles(div, 'shadow');
    return div;
  }
});

L.ImageMarkers.icon = function (options) {
  return new L.ImageMarkers.Icon(options);
};

}(this, document));
