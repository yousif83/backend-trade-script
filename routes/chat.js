var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')


router.get('/:chatRoom', function(req, res, next) {

  queries.getChatsByChatRoom(req.params.chatRoom).then(chats => {
    res.json(chats)
  })
});

router.put('/', function(req, res, next) {
  queries.insertChats(req.body).then(chats => {
    res.json(chats)
  })
});

module.exports = router;
