'use strict';
var event = require('require-dir')();


module.exports = function(namespace) {
  // redis clients
  const redis = require('redis');
  const store = redis.createClient();
  const sub = redis.createClient();



  namespace.on('connection', function(socket){
    sub.subscribe('patient_3');
    socket.on('patient_registration', function(data) {
      sub.subscribe(`patient_${data.id}`);
    });

    socket.emit('welcome', '');

    socket.on('message', function(text) {

    });

    socket.on('disconnect', function(){
    });

    sub.on('message', function(channel, message){
      socket.emit(channel, message);
    });

  });
};

function requireEvents(socket) {
  Object.keys(event).forEach(function(eventName) {
    require('./' + eventName)(socket);
  });
}
