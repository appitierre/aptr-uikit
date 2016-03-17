var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        flight: './src/app.js'
    },
    output: {
        path: './',
        filename: "/dist/js/app.js"
    },
    module: {
        loaders: [{
            //tell webpack to use jsx-loader for all *.jsx files
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }]
    },
    resolveLoader: {                                                                                
        root: path.join(__dirname, 'node_modules')                                                  
    }, 
    resolve: {
        root: './',
        alias: {
        },
        extensions: ['', '.js', '.jsx']
    },
    plugins: [ 
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                _: 'underscore'
        }) 
    ]
};