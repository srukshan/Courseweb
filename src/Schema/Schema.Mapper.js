var mongoose 		= require('mongoose');
const NoteSchema    = require('./Note.Schema');

const DBName        = "noted"

mongoose.model('Note', NoteSchema);

mongoose.connect(`mongodb://localhost:27017/${DBName}`, (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log(`Connected to the DB ${DBName}`);
});

module.exports = mongoose;