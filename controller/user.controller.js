const db = require('../db');

class User{

  async getUser(req, res) {
    const name = req.params.name;
    const user = await db.query(`
      SELECT id, name 
      FROM person
      WHERE person.name = $1
    `, [name]);
    res.json(user.rows[0]);
  }
  async createUser(req, res) {
    const {name} = req.body;
    const newUser = await db.query(`
      INSERT INTO person (name)
      VALUES ($1)
    `, [name]);
    res.json(`Регистрация ${name} прошла успешно`);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`
      DELETE FROM user WHERE user.id = $1
    `, [id]);
    res.json(`Пользователь удален`);
  }
  async updateUser(req, res) {
    const {id, name} = req.body;
    const user = await db.query(`
      UPDATE person 
      SET name = $1
      WHERE id = $1
      RETURNING *
    `, [id, name]);
    res.json(user.rows[0]);
  }
}

module.exports = new User();