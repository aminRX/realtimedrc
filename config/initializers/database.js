'use strict';

var logger = require('winston');
var express = require('express');
var app = express();
var server = require('http').Server(app);

var start = function(cb) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'benitocamela',
    password: 'fuckyeah',
    database: 'drchapp'
  });

  connection.connect();

  function findUserByToken(token) {
    connection.query(`SELECT * FROM users WHERE auth_token=${token}`, function(err, rows, fields) {
      if (err) throw err;
      return rows[0];
    });

  };

  const db = {
    findUserByToken: findUserByToken
  };

  if (cb) {
    return cb(null, db);
  }

};

module.exports = start;
