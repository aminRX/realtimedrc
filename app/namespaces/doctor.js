'use strict';

module.exports = function(io) {
  const doctor = io.of('/doctor');
  doctor.on('connection', function(socket){
    console.log('hola doctor');
  });
};
