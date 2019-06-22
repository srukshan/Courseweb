const Express = require("express")
const app = Express()
const BodyParser = require("body-parser")
const ClientRoute = require('./src/Routes/Client.Route')
const UserRoute = require('./src/Routes/User.Route')
const CourseRoute = require('./src/Routes/Course.Route')
const AssessmentRoute = require('./src/Routes/Assessment.Route')
const Passport = require('passport')
const Auth = require('./src/Controller/Authentication.Controller')

app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

app.use(Passport.initialize())

app.use('/clients/', Auth.isAuthenticated, ClientRoute);
app.use('/users/', UserRoute);
app.use('/courses/', CourseRoute);
app.use('/assessments/', AssessmentRoute);

module.exports = app;