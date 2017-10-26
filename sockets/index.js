module.exports = function(io) {
  io.on('connection',function(socket){
    console.log('made socket connection',socket.id)

    socket.on('chat',function(data){
      io.sockets.emit('chat',data)
    })
    socket.on('lesson',function(data){
      io.sockets.emit('lesson',data)
    })
  })

}
