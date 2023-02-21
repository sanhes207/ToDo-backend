const db = require('../db');
const query = require('../querys/user.query');

class User{
  async createUser(req, res) {
    const {name} = req.body;

    await db.query(query.addUser, [name])
    .then(() => {
      res.status(200).send({message: `Регистрация ${name} прошла успешно` });
    })
    .catch(() => {
      res.status(500).send({message: 'Error with adding new user'});
    })
  }

  async getUser(req, res) {
    const name = req.params.name;

    await db.query(query.getUser, [name])
    .then((result) => {
      res.status(200).json(result.rows[0]);
    })
    .catch(() => {
      res.status(500).send({message: 'Error with get user'})
    })
  }

  async updateUser(req, res) {
    const {id, name} = req.body;
    
    await db.query(query.updateUser, [id, name])
    .then(() => {
      res.status(200).send({message: 'User success updated'});
    })
    .catch(() => {
      res.status(500).send({message: 'Error with update user'})
    })
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    
    await db.query(query.deleteUSer, [id])
    .then(() => {
      res.status(200).send({message: 'User success deleted'});
    })
    .catch(() => {
      res.status(500).send({message: 'Error with deleted user'})
    })
  }
}

module.exports = new User();