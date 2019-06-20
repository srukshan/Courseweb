// @ts-check
const Bundler       = require('parcel-bundler');
const express       = require('express');
const Routes        = require("./Routes");
const ClientRoutes  = require("./ClientRoutes");
const BodyParser    = require("body-parser");

const bundler = new Bundler('./public/static/index.html', {});

const app = express();

const port = 3000;

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/api', Routes);
app.use(bundler.middleware());
app.use('/', ClientRoutes);

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`Application is running on port ${port}`);
});