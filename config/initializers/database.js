'use strict';

const logger = require('winston');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const r = require('rethinkdb');

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

  var connection = null;
  r.connect({host: 'localhost', port: 28015}, function(err, conn) {
    if(err) throw err;
    connection = conn;
  });
  const db = {
    findUserByToken: findUserByToken
  };

  if (cb) {
    return cb(null, db);
  }

};

module.exports = start;
