import Dexie from 'dexie'

var db = new Dexie('questionsDB');
db.version(1).stores({
    questions: 'id,question, option1, option2, option3, option4, answer'
});
db.open().catch(function(err) {
    console.log(err.stack || err)
})

export default db;