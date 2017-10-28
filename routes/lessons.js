var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')

router.get('/:lessonRoom', function(req, res, next) {

  queries.getLessonsByLessonRoom(req.params.lessonRoom).then(lessons => {
    res.json(lessons)
  })
});

router.get('/:userId/userlessons', function(req, res, next) {

  queries.getLessonsByuserId(req.params.userId).then(lessons => {
    res.json(lessons)
  })
});

router.put('/', function(req, res, next) {
  queries.insertLessons(req.body).then(lessons => {
    res.json(lessons)
  })
});

module.exports = router;
