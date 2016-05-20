// event Doctor

'use strict';
var event = require('require-dir')();
module.exports = function(namespace) {
  namespace.on('connection', function(socket){
    console.log('Hello doctor');
    requireEvents(socket);
  });
};

function requireEvents(socket) {
  Object.keys(event).forEach(function(eventName) {
    require('./' + eventName)(socket);
  });
}
