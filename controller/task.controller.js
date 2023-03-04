const db = require('../db');
const query = require('../querys/task.query');

class Task{

  async addNewTask(req, res) {
    const {category_id, description} = req.body;

    await db.query(query.addTask, [category_id, description])
    .then(() => {
      res.status(201).send({message: "New task added"});
    })
    .catch(() => {
      res.status(500).send({message: "Error in process adding new task"})
    })
  }

  async getAllTaskByCategory(req, res) {
    const {category_id} = req.query;

    await db.query(query.getAllTask, [category_id])
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch(() => {
      res.status(500).send({message: 'Error get data'})
    })
  }

  async updateTask(req, res) {
    const {is_checked, task_id} = req.body;

    await db.query(query.updateTask, [is_checked, task_id])
    .then(() => {
      res.status(200).send({message: 'Task success update'});
    })
    .catch(() => {
      res.status(500).send({message: 'Error update data'})
    })
  }

  async deleteTask(req, res) {
    const user_id = req.headers;

    await db.query(query.deleteTask, [user_id])
    .then(() => {
      res.status(200).send({message: 'Task success delete'});
    })
    .catch(() => {
      res.status(500).send({message: 'Error delete data'})
    })
  }
}

module.exports = new Task();