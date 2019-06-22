const router = require("express").Router();
const controller = require("../Controller/User.Controller");
const auth = require('../Controller/Authentication.Controller')

router
  .route("/")
  .post((req, res) => {
    controller
      .insert(req.body)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })
  .get(auth.isAuthenticated, auth.permit('admin'), (req, res) => {
    controller
      .getAll()
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });
module.exports = router;