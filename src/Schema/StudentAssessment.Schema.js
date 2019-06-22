var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User.Schema')
const assessment = require('./Assessment.Schema')

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
        ref: 'user',
        require: true
    },
    assessmentId: {
        type: Schema.Types.ObjectId,
        ref: 'assessment',
        require: true
    }
});
module.exports = mongoose.model('StudentAssessment', StudentAssessmentSchema)