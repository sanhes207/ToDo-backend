const getUser = `SELECT id, name FROM person WHERE person.name = $1`;
const addUser = `INSERT INTO person (name) VALUES ($1)`;
const updateUser = `UPDATE person SET name = $1 WHERE id = $1 RETURNING *`;
const deleteUSer = `DELETE FROM user WHERE user.id = $1`

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUSer
}