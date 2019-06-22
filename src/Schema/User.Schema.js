var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

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
    regDate: Date
});

// hash password before saving
UserSchema.pre('save', function (next) {
    console.info('came to pre save')
    var self = this;
    if (!self.isModified('password')) {
        return next();
    };
    bcrypt.genSalt(5, function (err, salt) {
        console.log("Come!!!");
        if (err) {
            console.log(err);
            return next(err);
        }
        bcrypt.hash(self.password, salt, null).then(hash => {
            self.password = hash
            next()
        }).catch(err => {
            console.log(err)
            next(err)
        })
    });

    console.info('exit pre save')
});

// password verification
UserSchema.methods.verifyPassword = function (password, callback) {
    return bcrypt.compare(password, this.password, function (err, match) {
        if (err) {
            return callback(err);
        }
        return callback(null, match);
    })
}

module.exports = mongoose.model('User', UserSchema)