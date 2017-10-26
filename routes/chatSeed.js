var express = require('express');
var router = express.Router();
const seedChat = require('../mongodb/seedChat')
const seedlesson = require('../mongodb/seedLessons')

router.get('/', function(req, res, next) {
	seedChat.seedChats().then(chat => {
      res.json(chat)
	})
});

router.get('/lessons', function(req, res, next) {
	seedlesson.seedLessons().then(lessons => {
      res.json(lessons)
	})
});

module.exports = router;
