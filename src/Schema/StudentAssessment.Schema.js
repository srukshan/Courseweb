var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentAssessmentSchema = new Schema({
    fileName: {
        type: String,
        require: true
    },
    mark: {
        type: Number,
        require: true
    },
    submissionDate: {
        type: Date,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    assessmentId: {
        type: Schema.Types.ObjectId,
        require: true
    }
});
module.exports = StudentAssessmentSchema