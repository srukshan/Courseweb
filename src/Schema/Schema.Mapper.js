var mongoose = require('mongoose');
const UserSchema = require('./User.Schema');
const AssessmentSchema = require('./Assessment.Schema');
const CourseSchema = require('./Course.Schema');
const DepartmentSchema = require('./Department.Schema');
const NotificationSchema = require('./Notification.Schema');
const StudentAssessmentSchema = require('./StudentAssessment.Schema');
const UserCourseSchema = require('./UserCourse.Schema');

const DBName = "courseweb"

mongoose.model('User', UserSchema);
mongoose.model('Assessment', AssessmentSchema);
mongoose.model('Course', CourseSchema);
mongoose.model('Department', DepartmentSchema);
mongoose.model('Notification', NotificationSchema);
mongoose.model('StudentAssessment', StudentAssessmentSchema);
mongoose.model('UserCourse', UserCourseSchema);

mongoose.connect(`mongodb://localhost:27017/${DBName}`, (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log(`Connected to the DB ${DBName}`);
});

module.exports = mongoose;