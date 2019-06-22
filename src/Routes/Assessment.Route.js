var express         = require('express');
var router          = express.Router();
var Controller      = require('../Controller/Assessment.Controller');

router.get('/api/assignment', (req, res) => {
    Controller.getAll().then(data => {
        res.status(data.status).json(data.data)
    }).catch(err => {
        res.status(err.status).send({message: err.message})
    })
})

router.post('/api/assignment/add',(req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message})
    }).catch(err => {
        res.status(err.status).send({message: err.message})
    })
})

module.exports = router