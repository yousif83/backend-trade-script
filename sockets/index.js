module.exports = function(io) {
  io.on('connection',function(socket){
    socket.on('chat',function(data){
      io.sockets.emit('chat',data)
    })
    socket.on('lesson',function(data){
      io.sockets.emit('lesson',data)
    })
    socket.on('userOnline',function(data){
      io.sockets.emit('userOnline',data)
    })
    socket.on('notification',function(data){
      io.sockets.emit('notification',data)
    })
  })

}
