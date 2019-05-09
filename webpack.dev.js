const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    devtool: 'inline-source-map',//方便查看源码错误
    mode:'development',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});