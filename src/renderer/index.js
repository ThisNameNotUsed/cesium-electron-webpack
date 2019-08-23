// Initial welcome page. Delete the following line to remove it.
'use strict';const styles=document.createElement('style');
styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;
const vueScript=document.createElement('script');
vueScript.setAttribute('type','text/javascript'),vueScript.setAttribute('src','https://unpkg.com/vue'),vueScript.onload=init,document.head.appendChild(vueScript),document.head.appendChild(styles);
function init(){Vue.config.devtools=false,
    Vue.config.productionTip=false,
    new Vue(
        {data:
            {versions:
                {electron:
                    process.versions.electron,
                    electronWebpack:require('electron-webpack/package.json').version}},
                    methods:{open(b){require('electron').shell.openExternal(b)}},
                    template:'<!DOCTYPE html> <html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport"content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"><title>Hello World!</title></head><body><p>Hello World!</p><div id="cesiumContainer"></div></body></html>'
                }).$mount('#app')
}


var Cesium = require('cesium/Cesium');
require('./css/main.css');
require('cesium/Widgets/widgets.css');


//var viewer = new Cesium.Viewer('cesiumContainer');


var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider : Cesium.createTileMapServiceImageryProvider({
      url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
    }),
    baseLayerPicker : false,
    geocoder : false
  });