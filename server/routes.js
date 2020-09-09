const express = require('express');

const ClassesController = require('./controllers/ClassesController');
const ConnectionsController = require('./controllers/ConnectionsController');
const router = express.Router();

// const ClassesControllers = new ClassesController();
// const ConnectionsControllers = new ConnectionsController();

// router.get('/classes', ClassesControllers.index);
// router.post('/classes', ClassesControllers.create);

router
  .route('/connections')
  .get(ConnectionsController.index)
  .post(ConnectionsController.create);

module.exports = router;
