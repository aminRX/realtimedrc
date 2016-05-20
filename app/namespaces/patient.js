'use strict';

module.exports = function(io) {
  const patient = io.of('/patient');
  require('../events/patient/')(patient);
};
