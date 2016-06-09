'use strict';

module.exports = function(io, db) {
  const patient = io.of('/patient');
  require('../events/patient/')(patient);

};
