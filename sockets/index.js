module.exports = function(io) {
  io.on('connection',function(socket){
    console.log('made socket connection',socket.id)

    socket.on('chat',function(data){
      io.sockets.emit('chat',data)
    })
  })
  

  // io.on('connection', function(socket) {
  //   // once a client has connected, we expect to get a ping from them saying what room they want to join
  //   console.log("make connection", socket.id);
  //   socket.on('room', function(data) {
  //
  //     socket.join(data.room);
  //     console.log(data);
  //     io.in(data.room).emit('message', data);
  //   });
  // });
}
