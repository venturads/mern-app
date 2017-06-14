var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        app_a: './app.js',
        todo_app: './todo.js'
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_models/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

