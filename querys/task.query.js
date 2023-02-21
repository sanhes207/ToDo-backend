const addTask = `INSERT INTO task (category_id, description) VALUES ($1, $2)`;
const getAllTask = `SELECT DISTINCT task.id, task.description, task.is_checked FROM task INNER JOIN category ON $1 = task.category_id WHERE person_id = $2`;
const updateTask = `UPDATE task SET is_checked = $1 WHERE task.id = $2`;
const deleteTask = `DELETE FROM task WHERE task.id = $1`;

module.exports = {
  addTask,
  getAllTask,
  updateTask,
  deleteTask
}