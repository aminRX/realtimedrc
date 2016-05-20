'use strict';

var logger = require('winston');
var express = require('express');
var app = express();
var server = require('http').Server(app);

var start = function(cb) {
  server.listen(6001);
  logger.info('[SOCKET DrChapp] Listening on port ' + 6001);

  var io = require('socket.io')(server);
  require('../../app/namespaces')(io);

  if (cb) {
    return cb();
  }

};

module.exports = start;
