var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Token', TokenSchema)