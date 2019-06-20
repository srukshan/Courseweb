var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    role: {
        type: Number,
        require: true
    },
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    telno: Number,
    email: String,
    password: {
        type: String,
        require: true
    },
    dept: Number,
    regDate: Date
});
module.exports = UserSchema