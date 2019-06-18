var Express         = require("express");
var Routes          = Express.Router();
var NoteRoute       = require('./src/Routes/Note.Route');

Routes.use('/notes/', NoteRoute);

module.exports = Routes;