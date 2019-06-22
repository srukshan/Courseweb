var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User.Schema');
const course = require('./Course.Schema')

const AssessmentSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    type: {
        type: Number,
        require: true
    },
    dueDate: {
        type: Date,
        require: true
    },
    createdDate: {
        type: Date,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        require: true
    }
});
module.exports = mongoose.model('Assessment', AssessmentSchema)