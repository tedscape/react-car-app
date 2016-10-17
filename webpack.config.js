/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//In Node.js, __dirname is always the directory in which the currently executing script resides

var BUILD_DIR = path.join(__dirname, './public/');
var APP_DIR = path.resolve(__dirname, 'src/');

//var bootstrapPath = path.resolve(__dirname, './node_modules/bootstrap/dist/css/bootstrap.min.css');

var config = {
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3003', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public'

    },
    module: {
      rules:
      [
        {
            enforce: "pre",
            test: /\.jsx$/,
            loaders: ['eslint-loader'],
            include: path.join(__dirname, 'src'),
            exclude: '/node_modules/'
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loaders: ['eslint-loader'],
            include: path.join(__dirname, 'src'),
            exclude: '/node_modules/'
        },
        {
            test: /\.jsx$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: '/node_modules/'
        },
        {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: '/node_modules/'
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css']
        },

        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css','sass']
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] 
    },
    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: __dirname,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

    ]


};

module.exports = config;