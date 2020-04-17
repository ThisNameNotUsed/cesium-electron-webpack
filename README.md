# cesium-electron-webpack
This is just the Cesium starter stuff injected into the electron-webpack-quickstart package using the the Cesium webpack tutorial (sort of). We're using it for a starting point and a coder's playground while begining a new Cesium based desktop app. It's nothing fancy but if your new-to/rusty-with Electron or Webpack or Electron-Webpack it might save you a little time.




* electron-webpack-quickstart found here: https://github.com/electron-userland/electron-webpack-quick-start
* cesium webpack tutorial: https://cesium.com/docs/tutorials/cesium-and-webpack/



<h2>How to start it up<h2>
  
1. You'll have to comment out \node_modules\cesium\Source\Widgets\Timeline\Timeline.css Line 101:
*background-image: url("../Images/TimelineIcons.png");*
Cesium's hello world includes a bunch of images that aren't included in it's NPM package and this particular line breaks the build. I'll find a not-so-dumb work around as soon as possible.
1. into console: yarn compile
1. into console: yarn dev


