var db = require('../mongodb/monk')
const userCollection=db.get('user')
const bcrypt = require('bcrypt')
var saltRounds=8

var elonPassword=bcrypt.hashSync("elon", saltRounds)
var connorPassword=bcrypt.hashSync("connor", saltRounds)
var BillPassword=bcrypt.hashSync("bill", saltRounds)
var brianPassword=bcrypt.hashSync("brian", saltRounds)
var sallyPassword=bcrypt.hashSync("sally", saltRounds)
var jjPassword=bcrypt.hashSync("jj", saltRounds)
var mariaPassword=bcrypt.hashSync("maria", saltRounds)
var yousifPassword=bcrypt.hashSync("yousif", saltRounds)
var trentonPassword=bcrypt.hashSync("trenton", saltRounds)
var codyPassword=bcrypt.hashSync("cody", saltRounds)
var loganPassword=bcrypt.hashSync("logan", saltRounds)
var caseyPassword=bcrypt.hashSync("casey", saltRounds)
var tylerPassword=bcrypt.hashSync("tyler", saltRounds)
var tyPassword=bcrypt.hashSync("ty", saltRounds)
var roxPassword=bcrypt.hashSync("rox", saltRounds)


module.exports = {
	seedUsers: function() {
  return userCollection.remove().then(() =>{
    return userCollection.insert([
      {
        name:'Elon Musk',
				email:'elon@gmail.com',
				password:elonPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/elon-musk.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['react'],
        skillsToTeach: ['angular','go'],
				onlineFlag:false
      } ,
      {
        name:'Connor Alcock ',
				email:'Conner@gmail.com',
				password:connorPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/connor-alcock.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['angular','cSharp'],
        skillsToTeach: ['go'],
				onlineFlag:false
      } ,
      {
        name:'Bill Gates',
				email:'bill@gmail.com',
				password:BillPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/bill-gates.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['python'],
        skillsToTeach: ['cSharp'],
				onlineFlag:false
      },
      {
        name:'Brian Mann',
				email:'brian@gmail.com',
				password:brianPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/brian-mann.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['cSharp','react'],
        skillsToTeach: ['go'],
				onlineFlag:false
      },
      {
        name:'Sally Bouley',
				email:'sally@gmail.com',
				password:sallyPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/sally-bouley.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['cSharp'],
        skillsToTeach: ['go','react'],
				onlineFlag:false
      },
      {
        name:'Jose Julio',
				email:'jj@gmail.com',
				password:jjPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/jose-julio.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['cSharp'],
        skillsToTeach: ['angular4','go'],
				onlineFlag:false
      },
      {
        name:'Maria Jose',
				email:'maria@gmail.com',
				password:mariaPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/maria-jose.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['cSharp'],
        skillsToTeach: ['python','go'],
				onlineFlag:false
      },

      {
        name:'Trenton Wuerker',
				email:'trenton@gmail.com',
				password:trentonPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/trenton-wuerker.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['cSharp'],
        skillsToTeach: ['react','go','python'],
				onlineFlag:false
      },
      {
        name:'Cody Duskin',
				email:'cody@gmail.com',
				password:codyPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/cody-duskin.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['go'],
        skillsToTeach: ['react','cSharp'],
				onlineFlag:false
      },
      {
        name:'Logan Crewss',
				email:'logan@gmail.com',
				password:loganPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/logan-crewss.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['go'],
        skillsToTeach: ['cSharp'],
				onlineFlag:false
      },
      {
        name:'Casey Herold',
				email:'casey@gmail.com',
				password:caseyPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/casey-herold.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['react'],
        skillsToTeach: ['cSharp'],
				onlineFlag:false
      },
      {
        name:'Tyler keesling',
				email:'tyler@gmail.com',
				password:tylerPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/tyler-keesling.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['angular','go'],
        skillsToTeach: ['react','cSharp'],
				onlineFlag:false
      },
      {
        name:'Ty Richard',
				email:'ty@gmail.com',
				password:tyPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/ty-richard.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['react'],
        skillsToTeach: ['cSharp','python'],
				onlineFlag:false
      },
      {
        name:'Roxanne Baldwin',
				email:'Roxanne@gmail.com',
				password:roxPassword,
        imageUrl:'https://s3-us-west-2.amazonaws.com/yaltimimie/rox.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['go'],
        skillsToTeach: ['cSharp','python'],
				onlineFlag:false
      }

    ])
   })


	}
}
