var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User.Schema')
const course = require('./Course.Schema')

const UserCourseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref : 'course'
    }
    
});
module.exports = mongoose.model('UserCourse', UserCourseSchema)