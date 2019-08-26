// Initial welcome page. Delete the following line to remove it.
'use strict';const styles=document.createElement('style');


var Cesium = require('cesium/Cesium');
require('./css/main.css');
require('cesium/Widgets/widgets.css');


var viewer = new Cesium.Viewer('cesiumContainer');

////starter code for offline Cesium
// var viewer = new Cesium.Viewer('cesiumContainer', {
//     imageryProvider : Cesium.createTileMapServiceImageryProvider({
//       url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
//     }),
//     baseLayerPicker : false,
//     geocoder : false
//   });