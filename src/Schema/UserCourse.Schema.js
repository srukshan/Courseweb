var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCourseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        require: true,
    }
});
module.exports = UserCourseSchema