var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema)