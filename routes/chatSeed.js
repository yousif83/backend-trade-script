var express = require('express');
var router = express.Router();
const seed = require('../mongodb/seedChat')

router.get('/', function(req, res, next) {
	seed.seedChats().then(chat => {
      res.json(chat)
	})
});

module.exports = router;
