// @ts-check
const express = require('express');
const RestApp = require("./RestApp");
const ClientApp = require("./ClientApp");
const mongoose = require('mongoose');

const app = express();

const port = 3000;
const db = 'courseweb'

mongoose.connect('mongodb://127.0.0.1:27017/' + db, err => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
});
mongoose.Promise = global.Promise;

app.use('/api', RestApp);

app.use('/', ClientApp);

app.listen(port, err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }

    console.log(`Application is running on port ${port}`);
});