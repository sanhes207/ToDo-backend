const db = require('../db.js');
const querys = require('../querys/color.query');

class Color {
  async getColor(req, res) {
    await db.query(querys.getColor)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      res.status(500).send({message: 'Error with getting color'})
    })
  }
}

module.exports = new Color;