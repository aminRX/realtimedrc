'use strict';
var event = require('require-dir')();


module.exports = function(namespace) {
  // redis clients
  const redis = require('redis');
  const store = redis.createClient();
  const pub = redis.createClient();
  const sub = redis.createClient();

  sub.subscribe('chat');

  namespace.use(function(socket, next) {
    if (true) {
      next();
    } else {
      console.log('no sigues');
    }
  });

  namespace.on('connection', function(socket){
    namespace.use(function(socket, next) {
      if (true) {
        next();
      } else {
        console.log('no sigues');
      }
    });
    socket.emit('welcome', '');

    socket.on('message', function(text) {

    });

    socket.on('disconnect', function(){
      console.log('Bye');
    });

    sub.on('message', function(pattern, key){

    });
  });
};

function requireEvents(socket) {
  Object.keys(event).forEach(function(eventName) {
    require('./' + eventName)(socket);
  });
}
