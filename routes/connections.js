
var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')

router.get('/:id/:stat', function(req, res, next) {
  queries.getConnections(req.params.id, req.params.stat).then(users => {
    res.json(users)
  })
});

router.put('/:id/:userReceiveRequestId/send', function(req, res, next) {
  queries.sendConnectionRequest(req.params.id, req.params.userReceiveRequestId).then(users => {
    res.json(users)
  })
});

router.put('/:id/:userSendRequestId/accept', function(req, res, next) {
  queries.acceptConnectionRequest(req.params.id, req.params.userSendRequestId).then(users => {
    res.json(users)
  })
});

module.exports = router;
