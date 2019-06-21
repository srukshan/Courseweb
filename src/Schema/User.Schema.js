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
    dept: Number,
    regDate: Date
});

// hash password before saving
UserSchema.pre('save', function (next) {
    var self = this;
    if (!self.isModified('password')) {
        return next();
    };
    bcrypt.genSalt(5, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(self.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }
            self.password = hash;
            next();
        });
    });

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