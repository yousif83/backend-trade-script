var db = require('../mongodb/monk')
const lessonsCollection=db.get('lessons')
module.exports = {
	seedLessons: function() {
  return lessonsCollection.remove().then(() =>{
    return lessonsCollection.insert([
      {
        lessonRoom:'5555555555',
        name:'Kyle Seeding',
        lessonMessage:'hi',
        senderId:"sdfsdsdfdfds",
        codeFlag:"false"
      }

    ])
   })

	}
}
