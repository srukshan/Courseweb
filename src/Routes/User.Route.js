const router = require("express").Router();
const controller = require("../Controller/User.Controller");
const auth = require('../Controller/Authentication.Controller')

router
  .route('/register')
  .post((req, res) => {
    let data = req.body
    data.role = 'student'
    controller
      .insert(data)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })

router
  .route("/")
  .post(auth.isAuthenticated, auth.permit('admin'), (req, res) => {
    let data = req.body
    if(data.role == 'student'){
      res.status(403).send('Invalid Action');
    }
    controller
      .insert(data)
      .then(data => res.status(data.status).send(data.message))
      .catch(err => res.status(err.status).send(err.message));
  })
  
  .get(auth.isAuthenticated, auth.permit('admin'), (req, res) => {
    console.log(req.user);
    controller
      .getAll()
      .then(data => res.status(data.status).json(data.data))
      .catch(err => res.status(err.status).send(err.message));
  });
module.exports = router;