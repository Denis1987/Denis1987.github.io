"use strict";!function(){var t={block:{},maps:{},isInitEventConstructor:!1,initConstructor:function(){return function(t,n,o){var e=this;if(n){var i=t.closest(".ul-container");e.block[i.attr("id")]={id:i.attr("id"),mapSettings:n},this.renderMap(t,n,!0,function(t){e.isInitEventConstructor||e.constructorEvents(),o(t)})}}}(),constructorEvents:function(){return function(){var t=this;t.isInitEventConstructor=!0;var n=function(){return function(){t.block&&$.each(t.block,function(){var t=this;setTimeout(function(){t.map&&t.map.fitToViewport(t.mapSettings.options.bounds)},1e3)})}}();$(window).off(".mapBackgroundResizeConstructor").on("addElelment.mapBackgroundResizeConstructor",n).on("colResized.mapBackgroundResizeConstructor",n).on("endWidgetEdit.mapBackgroundResizeConstructor",n)}}(),initPublish:function(){return function(){var t=this,n=this;$(window).off("changeSizeWindow"),$(window).on("changeSizeWindow.mapMode",function(){t.initPublish()}),$.each($(".ul-container","#body-fict"),function(){var t=$(this),o=t.attr("id"),e="desktop",i=t.attr("data-bgtype");if(991>$(window).width()&&768<$(window).width()?e="tablet":768>$(window).width()&&(e="phone"),window.cache.backgroundParams&&window.cache.backgroundParams[o]&&window.cache.backgroundParams[o][e]&&(i=window.cache.backgroundParams[o][e].bgtype),"map"==i){var r=null;try{r=JSON.parse(t.attr("data-map-settings"))}catch(a){console.error("map settings JSON parse failed")}if(!r)return;n.block[t.attr("id")]={id:t.attr("id"),mapSettings:r},n.renderMap($(".js-background-map",t),r,!1)}else $(".js-background-map",t).empty()})}}(),getMapProvider:function(){return function(t){var n=t.options.provider;return"ru"===t.lang&&"google"===n?"yandex":n}}(),renderMap:function(){return function(t,n,o,e){var i=this,r=i.getMapProvider(n),a=["map-helper/"+r];"google"===r&&a.push("json!/widgets/maps/json/styles_googlemaps.json"),n.markers||(n.markers=[]),i.block[t.closest(".ul-container").attr("id")].map=null,require(a,function(r,a){t.empty(),r({$el:t,mapOpts:{mapTypeId:n.options.mapTypeId,styles:a?a[n.options.styleNumber]:null,draggable:o,mapTypeControl:o,zoomControl:o,panControl:o,streetViewControl:o,scrollWheel:!1,bounds:{northWest:{latitude:n.options.bounds.northWest.latitude,longitude:n.options.bounds.northWest.longitude},southEast:{latitude:n.options.bounds.southEast.latitude,longitude:n.options.bounds.southEast.longitude}}},markers:n.markers.filter(function(t){return t.isEnabled}).map(function(t){return{id:t.id,latitude:+t.latitude,longitude:+t.longitude,text:i.getMarkerText(t.title,t.description),isDraggable:o}})},function(o){i.block[t.closest(".ul-container").attr("id")]={id:t.closest(".ul-container").attr("id"),mapSettings:n,map:o},i.event(),e&&e(o)})})}}(),getMarkerText:function(){return function(t,n){if(!t&&!n)return"";var o=[];return t&&o.push("<b>"+t+"</b>"),n&&o.push(n),'<span style="color: #000;">'+o.join("<br>")+"</span>"}}(),event:function(){return function(){var t=this,n=function(){return function(){$.each(t.block,function(){var n=this,o=$(".js-background-map",$("#"+n.id));o.length&&t.block[n.id].map&&t.block[n.id].map&&setTimeout(function(){t.block&&t.block[n.id]&&t.block[n.id].map&&t.block[n.id].map.fitToViewport(n.mapSettings.options.bounds)},1e3)})}}();$(window).off("resize.mapBackgroundResize"),$(window).on("resize.mapBackgroundResize",n)}}()};window.constructorMode?define("mapBgRender",["jquery"],function(){return t}):require(["jquery"],function(){t.initPublish()})}();
//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map

//# sourceMappingURL=backgroundBlockMap.js.map
