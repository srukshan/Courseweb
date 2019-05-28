var Express         = require("express");
var Routes          = Express.Router();
var UserRoute       = require('./src/User/User.Route');

Routes.use('/users/',UserRoute);

module.exports = Routes;