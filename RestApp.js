const Express = require("express")
const app = Express()
const BodyParser = require("body-parser")

const ClientRoute = require('./src/Routes/Client.Route')
const UserRoute = require('./src/Routes/User.Route')

const CourseRoute = require('./src/Routes/Course.Route')
const AssessmentRoute = require('./src/Routes/Assessment.Route')

const UserCourse = require('./src/Routes/UserCourse.Route')

const Passport = require('passport')

app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

app.use(Passport.initialize())

app.use('/clients/', ClientRoute);
app.use('/users/', UserRoute);
app.use('/courses/', CourseRoute);
app.use('/assessments/', AssessmentRoute);
app.use('/usercourse/', UserCourse)

module.exports = app;