const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
//var indexRouter = require('./routes/dashboard');
//var usersRouter = require('./routes/users');
//var emailRouter = require('./routes/email');
var app = express();

let tasks = [
  { id: 1, title: 'Task 1', status: 'pending' },
  { id: 2, title: 'Task 2', status: 'completed' },
  { id: 3, title: 'Task 3', status: 'todo' },
];

app.get('/task', (req, res) => {
  const counts = {
    pending: 0,
    completed: 0,
    todo: 0,
  };

  tasks.forEach((task) => {
    counts[task.status]++;
  });
  res.json(counts);
});
router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);
// router.route('/dashboard').post(counts);

module.exports = router;