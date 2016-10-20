/* eslint-disable */
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
// webpackConfig.devtool = 'inline-source-map';
var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in Chrome
    singleRun: false, //just run once by default
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/whatwg-fetch/fetch.js',
      './src/**/*.spec.js',
    ],
    preprocessors: {
      './src/**/*.spec.js': [ 'webpack'] //preprocess with webpack and our sourcemap loader
    },
    webpackMiddleware: {
      noInfo: true,
    },
    
    webpack: {
        devtool: 'source-map',
        externals: {
          'cheerio': 'window',
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true
        },
        module: {
          rules:
          [
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
            },
            { test: /\.json$/, loader: "json" },
          ]
        },
        resolve: {
            extensions: ['.js', '.jsx'] 
        },
        plugins: [

        ]
    }
  });
};