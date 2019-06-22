// @ts-check
const express = require("express");
const router = express.Router();
const controller = require("../Controller/Course.Controller");
const auth = require('../Controller/Authentication.Controller')

router
  .route("/")
  .post(auth.isAuthenticated, auth.permit('admin'), (req, res) => {
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
router
  .route("/accept/:id")
  .all(auth.isAuthenticated, auth.permit('instructor'))
  .put((req, res) => {
    controller
      .accept(req.user, req.params.id)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })

router
  .route("/:id")
  .get((req, res) => {
    controller
      .getById(req.params.id)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })
router
  .route("/user")
  .all(auth.isAuthenticated)
  .get((req, res) => {
    controller
      .getByUserId(req.user._id)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })

module.exports = router;