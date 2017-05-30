var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname,

    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    }
}
