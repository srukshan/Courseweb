const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const NoteRoute = require('./src/Routes/Note.Route');

app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

app.use('/notes/', NoteRoute);

module.exports = app;