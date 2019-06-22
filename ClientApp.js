// @ts-check
const Express = require("express");
const app = Express();
const Bundler = require('parcel-bundler');
const session = require('express-session');
const base64 = require('base-64');

const bundler = new Bundler('./public/static/index.html', {});

app.use(bundler.middleware());

app.use(Express.static('./dist'));

app.use(session({
    secret: 'courseweb'
}));

app.post('/user/', (req, res) => {
    req.session.hash = base64.encode(req.body.user + ':' + req.body.password)
})

app.get('/user/', (req, res) => {
    res.json(req.session.hash)
})

app.use('*', (req, res) => {
    res.sendFile('./dist/index.html');
})

module.exports = app;