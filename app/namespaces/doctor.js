'use strict';

module.exports = function(io) {
  const doctor = io.of('/doctor');
  require('../events/doctor')(doctor);
};
