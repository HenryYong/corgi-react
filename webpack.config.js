/**
 *  webpack config file for corgi-react
 *  Created @ 2017-07-29 12:57:47
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */

var path = require('path')
var webpack = require('webpack')

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'Corgi.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            'doc_components': path.resolve('./app/page_components/doc_components'),
            'pages': path.resolve('./app/page_components'),
            'packages': path.resolve('./packages/index'),
            'libs': path.resolve('./libs')
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ]
}

module.exports = config
