var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },

    accept: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Course', CourseSchema)