'use strict';
var event = require('require-dir')();
const redis = require('redis');
const ios = require('socket.io-client');

module.exports = function(namespace) {

  namespace.on('connection', function(socket){
    assignSocketId(socket);
    handleClientDisconnection(socket);
    handleRequest(socket);
    handleDoctorAdded(socket);
  });

  function assignSocketId(socket){
    socket.emit('nameResult', {
      success: true,
      id: socket.id
    });
  }

  function handleClientDisconnection(socket) {
    socket.on('disconnect', function(){
    });
  }

  function handleRequest(socket) {
    socket.on('request', (data) => {
      const request = JSON.parse(data);
    });
  }

  function handleDoctorAdded(socket) {
    socket.on('doctor:add', (data) => {
      const request = JSON.parse(data);

    });
  }

  const socketClient = ios('http://localhost:6001/communication');
  const sub = redis.createClient();

  sub.subscribe('doctor:add');
  sub.subscribe('request');

  socketClient.on('connect', () => {
    console.log('Sub connected', socketClient.id);
  });

  sub.on('message', (channel, message) => {
    socketClient.emit(channel, message);
  });

};
