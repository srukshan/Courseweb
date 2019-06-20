const Express = require("express");
const Routes = Express.Router();
const BodyParser = require("body-parser");
const NoteRoute = require('./src/Routes/Note.Route');

app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

Routes.use('/notes/', NoteRoute);

module.exports = Routes;