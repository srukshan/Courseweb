const router = require("express").Router();
const controller = require("../Controller/User.Controller");

router
  .route("/")
  .post((req, res) => {
    controller
      .insert(req.body)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })
  .get((req, res) => {
    controller
      .getAll()
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });
module.exports = router;
