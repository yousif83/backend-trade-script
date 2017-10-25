var db = require('../mongodb/monk')
const userCollection = db.get('user')
const chatCollection = db.get('chat')
module.exports = {
  getUsers: function() {
    return userCollection.find()
  },
  getUsersById: function(id) {

    return userCollection.findOne({
      _id: id
    })
  },
  updateUser: function(id, body) {
    return userCollection.update({
      '_id': id
    }, {
      $set: {
        "imageUrl": body.imageUrl
      }
    })
  },
  updateConnections: function(arrConnections, id) {
    return userCollection.update({
      '_id': id
    }, {
      $set: {
        'connections': arrConnections
      }
    })
  },
  getSuggestions: function(id) {
    return userCollection.findOne({
      _id: id
    }).then((user) => {
      return userCollection.find({
        skillsToTeach: {
          $in: user.skillsToLearn
        },
        skillsToLearn: {
          $in: user.skillsToTeach
        },
        _id: {
          $nin: user.connections.concat(user.pending, user.received)
        }
      })
    })
  },
  getConnections: function(id, statFlag) {
    return userCollection.findOne({
      _id: id
    }).then((user) => {
      let stat = []
      if (statFlag == 'connections') {
        stat = user.connections
      } else if (statFlag == 'pending') {
        stat = user.pending
      } else if (statFlag == 'received') {
        stat = user.received
      }
      return userCollection.find({
        _id: {
          $in: stat
        }
      })
    })
  },
  sendConnectionRequest: function(userId, userReceiveRequestId) {
    const updateUserPending = userCollection.update({
      '_id': userId
    }, {
      $push: {
        "pending": userReceiveRequestId
      }
    })
    const updateUserReceivedRequest = userCollection.update({
      '_id': userReceiveRequestId
    }, {
      $push: {
        "received": userId
      }
    })
    return Promise.all([updateUserPending, updateUserReceivedRequest])

  },
  acceptConnectionRequest: function(userId, userSendRequestId) {
    const removeUserReceive = userCollection.update({
      '_id': userId
    }, {
      $pull: {
        "received": userSendRequestId
      }
    })
    const removeUserSendRequest = userCollection.update({
      '_id': userSendRequestId
    }, {
      $pull: {
        "pending": userId
      }
    })

    const connectUserSend = userCollection.update({
      '_id': userSendRequestId
    }, {
      $push: {
        "connections": userId
      }
    })
    const connectUserReceive = userCollection.update({
      '_id': userId
    }, {
      $push: {
        "connections": userSendRequestId
      }
    })
    return Promise.all([removeUserReceive, removeUserSendRequest, connectUserSend, connectUserReceive])

  },
  getChatsByChatRoom: function(roomId) {
    return chatCollection.find({
      chatRoom: roomId
    })
  },
  insertChats: function(body) {
    console.log(body)
    return chatCollection.insert([
      {
        chatRoom: body.chatRoom,
        name:body.name,
        chatMessage:body.chatMessage,
        senderId:body.senderId
      }

    ])
  }

}
