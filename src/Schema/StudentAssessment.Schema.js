var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentAssessmentSchema = new Schema({
    fileId: {
        type: Schema.Types.ObjectId,
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
module.exports = mongoose.model('StudentAssessment', StudentAssessmentSchema)