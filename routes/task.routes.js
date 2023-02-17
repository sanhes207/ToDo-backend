const Router = require('express');
const router = new Router();
const taskController = require('../controller/task.controller');

router.post('/task', taskController.addNewTask);
router.get('/task', taskController.getAllTaskByCategory);
router.put('/task', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports = router; 