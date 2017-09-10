/**
 *  Row组件配置文件
 *  Created @ 2017-07-28 00:12:57
 *  Copyright (c) 2017 by Henry Yang.
 *  All Rights Reserved.
 *  License: MIT
 */
var path = require('path')
var webpack = require('webpack')

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './index.js')],
    output: {
        filename: 'Row.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'corgi-row',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.jsx']
    },
    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "react"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ]
}

module.exports = config
