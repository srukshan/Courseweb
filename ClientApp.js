// @ts-check
const Express = require("express");
const app = Express();
const Bundler = require('parcel-bundler');

const bundler = new Bundler('./public/static/index.html', {});

app.use(bundler.middleware());

app.use(Express.static('./dist'));

app.use('*', (req, res) => {
    res.sendFile('./dist/index.html');
})

module.exports = app;