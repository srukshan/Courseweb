var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost:27017/users', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;