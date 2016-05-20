'use strict';
var namespace = require('require-dir')();
module.exports = function(io) {
  Object.keys(namespace).forEach(function(namespaceName) {
    // Initialize the route to add its functionality to router
    require('./' + namespaceName)(io);
  });
};
