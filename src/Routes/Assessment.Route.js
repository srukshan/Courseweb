var express = require('express');
var router = express.Router();
var controller = require('../Controller/Assessment.Controller');
var studentAssessmentcontroller = require('../Controller/Assessment.Controller');
var auth = require('../Controller/Authentication.Controller');

router
  .route("/")
  .post(auth.isAuthenticated, auth.permit('instructor'), (req, res) => {
    controller
      .insert(req.body)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })
  .get(auth.isAuthenticated, (req, res) => {
    controller
      .getAll()
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route("/course/:id")
  .get(auth.isAuthenticated, (req, res) => {
    controller
      .getByCourseId(req.params.id)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route("/user/")
  .get(auth.isAuthenticated, (req, res) => {
    controller
      .getByCourseId(req.user._id)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route('/:id')
  .put(auth.isAuthenticated, auth.permit('instructor'), (req, res) => {
    controller
      .update(req.params.id, req.body)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  })

router
  .route('/mark/')
  .post(auth.isAuthenticated, auth.permit('instructor'), (req, res) => {
    studentAssessmentcontroller
      .addMark(req.body)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route('/user/')
  .post(auth.isAuthenticated, auth.permit('student'), (req, res) => {
    studentAssessmentcontroller
      .insert(req.body)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route('/user/course/')
  .get(auth.isAuthenticated, (req, res) => {
    controller
      .getByCourseUserId(req.body)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });

router
  .route('/user/:id')
  .get(auth.isAuthenticated, auth.permit('student', 'instructor'), (req, res) => {
    studentAssessmentcontroller
      .getById(req.params.id)
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });


module.exports = router