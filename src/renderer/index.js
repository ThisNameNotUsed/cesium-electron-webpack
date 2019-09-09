// Initial welcome page. Delete the following line to remove it.
'use strict';const styles=document.createElement('style');


var Cesium = require('cesium/Cesium');
require('./css/main.css');
require('cesium/Widgets/widgets.css');
var CesiumPlane = require('./models/CesiumAir/Cesium_Air.glb'); 

////Base initializer for map web-loading cesium
//var viewer = new Cesium.Viewer('cesiumContainer');

////starter code for offline Cesium
// var viewer = new Cesium.Viewer('cesiumContainer', {
//     imageryProvider : Cesium.createTileMapServiceImageryProvider({
//       url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
//     }),
//     baseLayerPicker : false, //Hello World's Online map sampler menu
//     geocoder : false //bing's address and landmark querier
//   });

//https://cesium.com/docs/tutorials/terrain/   tutorial setup
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYjJlNDJkMi01NTgzLTRhYmQtOGNiZC1lMDk3ZThiNTM2NGQiLCJpZCI6MTQ0NjgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjU2NDQxNjB9.UsHmTDIF-6cRYQFufy-9oxVAr4XWziPVl6uuPMpojSE';
var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider : Cesium.createWorldTerrain({
        requestWaterMask: true
    })
});


// var viewer = new Cesium.Viewer('cesiumContainer', {
//     infoBox : false,
//     selectionIndicator : false,
//     shadows : true,
//     shouldAnimate : true
// });

function createModel(url, height) {
    viewer.entities.removeAll();

    var position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, height);
    var heading = Cesium.Math.toRadians(135);
    var pitch = 0;
    var roll = 0;
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);

    var entity = viewer.entities.add({
        name : url,
        position : position,
        orientation : orientation,
        model : {
            uri : url,
            minimumPixelSize : 128,
            maximumScale : 20000
        }
    });
    //viewer.trackedEntity = entity;
}

createModel(CesiumPlane, 250);