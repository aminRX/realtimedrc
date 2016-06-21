// event Doctor

'use strict';
const redis = require('redis');
module.exports = function(namespace) {

  const sub = redis.createClient();
  sub.subscribe('request_to_doctors');

  namespace.on('connection', (socket) => {

    socket.on('doctor_registration', (data) => {
      sub.subscribe(`doctor_${data.id}`);
    });

    socket.on('disconnect', (data) => {
      console.log(data);
    });

    socket.on('message', (data) => {
      console.log(data);
    });

    sub.on('message', (channel, message) => {
      console.log(channel, message);
      socket.emit(channel, message);
    });

  });

};
