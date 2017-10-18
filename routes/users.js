var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')

router.get('/', function(req, res, next) {
  queries.getUsers().then(users => {
    res.json(users)
  })
});
router.get('/:id', function(req, res, next) {

  queries.getUsersById(req.params.id).then(users => {
    res.json(users)
  })
});

router.put('/:id', function(req, res, next) {
  queries.updateUser(req.params.id, req.body).then(users => {
    res.json(users)
  })
});

router.put('/connections/:id', function(req, res, next) {

  queries.updateConnections(req.body,req.params.id).then(users => {
    res.json(users)
  })
});


module.exports = router;
