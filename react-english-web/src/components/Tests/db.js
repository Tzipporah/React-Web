import Dexie from 'dexie'

// Database of test questions
var db = new Dexie('QuestionsDB');
db.version(1).stores({
    beginners: 'id, question, option1, option2, option3, option4, answer',
    students: 'id, question, option1, option2, option3, option4, answer',
    advancers: 'id, question, option1, option2, option3, option4, answer',
    business: 'id, question, option1, option2, option3, option4, answer',
    spoken: 'id, question, option1, option2, option3, option4, answer'
});
db.open().catch(function(err) {
    console.log(err.stack || err)
})

export default db;