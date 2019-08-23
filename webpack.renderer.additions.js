// The path to the CesiumJS source code
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const CopywebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    module: {
        unknownContextCritical: false
    },
    output: {
            // Needed to compile multiline strings in Cesium
            sourcePrefix: ''
        },
        amd: {
            // Enable webpack-friendly use of require in Cesium
            toUrlUndefined: true
        },
        node: {
            // Resolve node module use of fs
            fs: 'empty'
    },
    resolve: {
        alias: {
            // CesiumJS module name
            cesium: path.resolve(__dirname, cesiumSource)
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],
}