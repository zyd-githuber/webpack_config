const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
//引入vue-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new CleanWebpackPlugin({//每次打包前dist文件夹下的旧文件
            cleanAfterEveryBuildPatterns:['dist']
        }),
        new HtmlWebpackPlugin({//生成最终的HTML
            title:'vue page'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    },
                    'vue-style-loader'
                    // MiniCssExtractPlugin.loader,
                    // process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
};