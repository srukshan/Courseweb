var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./User.Schema')
const course = require('./Course.Schema')

const UserCourseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref : 'course',
        require: true,
    }
    
});
module.exports = mongoose.model('UserCourse', UserCourseSchema)