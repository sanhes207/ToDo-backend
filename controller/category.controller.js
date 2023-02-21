const db = require('../db');
const querys = require('../querys/category.query.js');

class Category {
  async addCategory(req, res) {
    const {user_id, title, color} = req.body;

    await db.query(color? querys.insertCategory : querys.insertCategoryWithColor, [user_id, title, color])
    .then(() => {
      res.status(201).send({message: 'New category added'})
    })
    .catch(() => {
      res.status(500).send({message: 'Error'})
    })
  }

  async getCategorys(req, res) {
    const {user_id} = req.headers;

    await db.query(querys.getCategory, [user_id])
    .then((result) => {
      res.status(200).json(result.rows)
    })
    .catch(() => {
      res.status(500).send({message: 'Error'})
    })
   }

  async updateCategory(req, res) {
    const {category_id, title, color} = req.body;
    
    await db.query(updateCategory, [title, color, category_id])
    .then((result) => {
      res.status(200).json(result.rows[0])
    })
    .catch(() => {
      res.status(500).send({message: 'Error'})
    })
  }
}

module.exports = new Category();