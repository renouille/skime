/*321e4ac899df62e869f84fed45f734e1c7da2f94*/(function(b,a,c){L.ImageMarkers={};L.ImageMarkers.version="1.0";L.ImageMarkers.Icon=L.Icon.extend({options:{iconSize:[35,45],iconAnchor:[17,42],popupAnchor:[1,-32],shadowAnchor:[10,12],shadowSize:[36,16],className:"awesome-marker",icon:"user",color:"blue",iconColor:"white"},initialize:function(d){d=L.setOptions(this,d)},createIcon:function(){var e=a.createElement("div"),d=this.options;if(d.icon){e.innerHTML=this._createInner()}if(d.bgPos){e.style.backgroundPosition=(-d.bgPos.x)+"px "+(-d.bgPos.y)+"px"}this._setIconStyles(e,"icon-"+d.color);return e},_createInner:function(){var d;d=this.options.icon;return"<img class='imgRound' src='"+d+"'></img>"},_setIconStyles:function(d,g){var f=this.options,h=L.point(f[g=="shadow"?"shadowSize":"iconSize"]),e;if(g==="shadow"){e=L.point(f.shadowAnchor||f.iconAnchor)}else{e=L.point(f.iconAnchor)}if(!e&&h){e=h.divideBy(2,true)}d.className="awesome-marker-"+g+" "+f.className;if(e){d.style.marginLeft=(-e.x)+"px";d.style.marginTop=(-e.y)+"px"}if(h){d.style.width=h.x+"px";d.style.height=h.y+"px"}},createShadow:function(){var e=a.createElement("div"),d=this.options;this._setIconStyles(e,"shadow");return e}});L.ImageMarkers.icon=function(d){return new L.ImageMarkers.Icon(d)}}(this,document));