var express = require('express');
var router = express.Router();
const queries = require('../mongodb/queries')
const upload  = require('multer')();
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
require('dotenv').config()
AWS.config.update({ accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET });
const s3 = new AWS.S3();

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
router.post('/image', upload.single('image'), (req, res) => {
  let id = uuid();
  s3.putObject({
    Bucket: process.env.S3_BUCKET,
    Key: id,
    Body: new Buffer(req.file.buffer)
  }, err => {
    if (err) {
       console.log(err)
    } else {
      res.json(id)
    }
  });
})

module.exports = router;
