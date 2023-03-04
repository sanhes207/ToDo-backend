const addTask = `INSERT INTO task (category_id, description) VALUES ($1, $2)`;
const getAllTask = `SELECT DISTINCT 
                      task.id,
                      task.description,
                      task.is_checked 
                    FROM task
                    WHERE task.category_id = $1`;
const updateTask = `UPDATE task SET is_checked = $1 WHERE task.id = $2`;
const deleteTask = `DELETE FROM task WHERE task.id = $1`;

module.exports = {
  addTask,
  getAllTask,
  updateTask,
  deleteTask
}   