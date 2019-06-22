const router = require('express').Router()
const clientController = require('../Controller/Client.Controller')

router.get('/', (req, res) => {
    clientController.getAll(req.user._id)
        .then(data => res.status(data.status).json(data.data))
        .catch(err => res.status(err.status).send(err.message))
})

router.post('/', (req, res) => {
    req.body.user = req.user
    clientController.insert(req.body)
        .then(data => res.status(data.status).send(data.message))
        .catch(err => res.status(err.status).send(err.message))
})

module.exports = router