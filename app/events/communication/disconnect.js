module.exports = function(socket) {
  socket.on('disconnect', function(data) {
    console.log(data);
  });
};
