var mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

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
        require: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        require: true
    }
});
module.exports = AssessmentSchema