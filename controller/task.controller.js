const db = require('../db');

class Task{

  async addNewTask(req, res) {
    const {id_category, id_important, id_person, description} = req.body;
    const newTask = await db.query(`
      INSERT INTO task (id_category, description, id_important, id_person) 
      VALUES ($1, $2, $3, $4)
    `, [id_category, description, id_important, id_person]);
    res.json(newTask);
  }
  async getAllTask(req, res) {
    const {user_id} = req.headers;  
    console.log(user_id);
    const tasks = await db.query(`
      SELECT task.id, task.description, category.title AS category, important.title AS important 
      FROM task
      INNER JOIN important
      ON important.id = task.id_important
      INNER JOIN category
      ON category.id = task.id_category
      WHERE task.id_person = $1`
    , [user_id]);
    res.json(tasks.rows);
  }
  async getTask(req, res) {
    const id = req.params.id;
    const task = await db.query(`
      SELECT task.description, category.title AS category, important.title AS important 
      FROM task
      INNER JOIN important
      ON important.id = task.id_important
      INNER JOIN category
      ON category.id = task.id_category
      WHERE task.id = $1`
    , [id]);
    res.json(task.rows[0]);
  }
  async updateTask(req, res) {
    const {id_category, id_important, description, id} = req.body;
    const newTask = await db.query(`
      UPDATE task 
      SET id_category = $1,
          id_important = $2,
          decription = $3
      WHERE task.id = $4
      RETURNING *
    `, [id_category, id_important, description, id]);
    res.json(newTask);
  }
  async deleteTask(req, res) {
    const id = req.params.id;
    const task = await db.query(`DELETE FROM task WHERE task.id = $1`, [id]);
    res.json(task.rows);
  }
}

module.exports = new Task();