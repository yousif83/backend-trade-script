var express =require('express')
var router=express.Router()
var db = require('../mongodb/monk')
const queries = require('../mongodb/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const userCollection = db.get('user')

router.post('/signup', function(req, res){

  if (req.body.email.trim() =='' || req.body.name.trim()== '' ){
    res.json({
      error: 'email or username cannot be blank'
    })
  }
  else {
    userCollection.find({email : req.body.email})
    .then(newUser => {
      if (newUser.length !==0) {
        res.json({
            error: 'Email or Username is already in use.'
        })
      }
      if (newUser.length==0) {
        var saltRounds=8
        var hash=bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password = hash

        userCollection.insert(req.body)
            .then(user => {
              console.log(user);

              let token = jwt.sign(user, process.env.TOKENSECRET)
              res.json({
              	data: token
              })
            })
      }

    })
  }
})

router.post('/login', function(req, res, next) {

	  userCollection.find({email : req.body.email})
		.then(user => {
			if (user.length === 0) {
				res.json({
					error: 'Email or password did not match.'
				})
			} else {

				let match=bcrypt.compareSync(req.body.password, user[0].password)

        console.log(req.body.password);
				if (match) {
          console.log(user[0]._id)
					let token = jwt.sign(user[0], process.env.TOKENSECRET)
          console.log(token)
					res.json({
						data: "token"
					})
				} else {

					res.json({
						error: 'Username or password did not match.'
					})
				}
			}
		})
		.catch(err => {
			res.json(err)
		})
})
module.exports=router
