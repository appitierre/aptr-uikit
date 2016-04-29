var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        build: './src/app.js'
    },
    output: {
        path: './src/',
        filename: "../build/[name].js"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolveLoader: {                                                                                
        root: path.join(__dirname, 'node_modules')                                                  
    }, 
    resolve: {
        root: './src',
        alias: {
            react: path.resolve('./node_modules/react'),
            bloom: 'bloom'
        },
        extensions: ['', '.js', '.jsx']
    }
};