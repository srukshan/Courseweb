// @ts-check
var Express         = require("express");
var Routes          = Express.Router();

Routes.use(Express.static('./dist'));

Routes.use('*', (req, res) => {
    res.sendFile('./dist/index.html');
})

module.exports = Routes;