var db = require('../mongodb/monk')
const chatCollection=db.get('chat')
module.exports = {
	seedChats: function() {
  return chatCollection.remove().then(() =>{
    return chatCollection.insert([
      {
        chatRoom:'5555555555',
        name:'Kyle Seeding',
        chatMessage:'hi'
      }

    ])
   })

	}
}
