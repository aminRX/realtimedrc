'use strict';

module.exports = function(io, db) {
  const communication = io.of('/communication');
  require('../events/communication/')(communication);

};
