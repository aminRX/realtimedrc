'use strict';

module.exports = function(socket) {
  console.log('message');
  socket.on('message', function(data) {
    console.log(data);
  });
};
