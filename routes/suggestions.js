
var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')

router.get('/:id', function(req, res, next) {
  queries.getSuggestions(req.params.id).then(users => {
    res.json(users)
  })
});

module.exports = router;
