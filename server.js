/* eslint-disable */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var app = express();

var compiler = webpack(config);
var carOfTheWeek = require('./data/carOfTheWeek');
var listOfMakes = require('./data/makes');
var listOfModels = require('./data/models');

var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    path = require("path");

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
});

// Important part. Send down index.html for all requests
server.use('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

server.listen(3003, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3003');
});

function allowCrossDomain(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  req.headers.origin && res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}

app.use(allowCrossDomain);
app.listen(process.env.PORT || 8080);

app.get('/carOfTheWeek', function(req, res) {
  res.header("Content-Type", "application/json");
  res.json(carOfTheWeek);
});

app.get('/makes', function(req, res) {
  res.header("Content-Type", "application/json");
  res.json(listOfMakes);
});
// get list of all models with a makeId
app.get('/models/:id', function(req, res) {
  res.header("Content-Type", "application/json");
  var makeId = Number.parseInt(req.params.id, 10);
  var listOfModelsForMake = listOfModels.filter((item, index) => {
    return item.makeId === makeId;
  });

  res.json(listOfModelsForMake);
});

// get model with an id
app.get('/model/:id', function(req, res) {
  res.header("Content-Type", "application/json");
  var modelId = Number.parseInt(req.params.id, 10);
  var selected = listOfModels.filter((item, index) => {
      return item.id === modelId ? item: null;
    })
    .map((model) => {
      var makes = listOfMakes.filter((make) => (
        model.makeId === make.id
      ));
      if(makes.length === 1) {
        model.makeName = makes[0].name;
        return model;
      }
    });
  if(selected.length === 1) {
    res.json(selected[0]);
  } else {
    res.json({});
  }
});