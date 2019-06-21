var express         = require('express');
var router          = express.Router();
var Controller      = require('../Controller/User.Controller');

router.get('/api/user', (req, res) => {
    Controller.getAll().then(data => {
        res.status(data.status).json(data.data)
    }).catch(err => {
        res.status(err.status).send({message: err.message})
    })
})

router.post('/api/user/add',(req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message})
    }).catch(err => {
        res.status(err.status).send({message: err.message})
    })
})

module.exports = router