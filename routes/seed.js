var express = require('express');
var router = express.Router();
const seed = require('../mongodb/seed')

router.get('/', function(req, res, next) {
	seed.seedUsers().then(users => {
      res.json(users)
	})
});

module.exports = router;
