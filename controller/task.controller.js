const db = require('../db');

class Task{

  async addNewTask(req, res) {
    const {category_id, description} = req.body;
    const newTask = await db.query(`
    INSERT INTO task (category_id, description)
		VALUES ($1, $2)
    `, [category_id, description]);
    res.json(newTask);
  }

  async getAllTaskByCategory(req, res) {
    const {user_id, category_id} = req.headers;
    const tasks = await db.query(`
      SELECT DISTINCT task.id, task.description, task.is_checked
      FROM task
      INNER JOIN category
      ON $1 = task.category_id
      WHERE person_id = $2
      `, [category_id, user_id]);
    res.json(tasks.rows);
  }

  async updateTask(req, res) {
    const {is_checked, task_id} = req.body;
    const newTask = await db.query(`
    UPDATE task
    SET is_checked = $1
    WHERE task.id = $2
    `, [is_checked, task_id]);
    res.json(newTask);
  }

  async deleteTask(req, res) {
    const user_id = req.headers;
    const task = await db.query(`DELETE FROM task WHERE task.id = $1`, [user_id]);
    res.json('Пользователь был удален');
  }
}

module.exports = new Task();