var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    accept: {
        type: Boolean,
        default: false
    }
});
module.exports = CourseSchema