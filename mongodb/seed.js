var db = require('../mongodb/monk')
const userCollection=db.get('user')
module.exports = {
	seedUsers: function() {
  return userCollection.remove().then(() =>{
    return userCollection.insert([
      {
        name:'Kyle Seeding',
        imageUrl:'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg',
        connections: [],
        pending: [],
        received: [],
        skillsToLearn: ['angular4','sockets.io'],
        skillsToTeach: ['react','view']
      } ,
      {
        name:'Elon Musk',
        imageUrl:'https://i.ytimg.com/vi/tnBQmEqBCY0/maxresdefault.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['react'],
        skillsToTeach: ['angular4','ember']
      } ,
      {
        name:'Steve Jobs',
        imageUrl:'https://s3.amazonaws.com/user-media.venngage.com/653853-b002e1417ae7934816a34e51d1fc7518.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: [],
        skillsToTeach: []
      } ,
      {
        name:'Bill Gates',
        imageUrl:'https://pbs.twimg.com/profile_images/889736688624312321/xVAFH9ZH_400x400.jpg',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['view'],
        skillsToTeach: ['angular4']
      },
      {
        name:'Jeff Bezos',
        imageUrl:'https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict0002890226551-e1490950325831.jpg?strip=all&w=960',
        connections:[],
        pending: [],
        received: [],
        skillsToLearn: ['view'],
        skillsToTeach: ['sockets.io']
      }
    ])
   })


	}
}
