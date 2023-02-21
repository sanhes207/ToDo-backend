const insertCategory = `INSERT INTO category (title, person_id) VALUES ($1, $2)`;
const insertCategoryWithColor = `INSERT INTO category (title, person_id, color) VALUES ($1, $2, $3)`;
const getCategory = `SELECT DISTINCT category.id, category.title, category.color FROM category WHERE person_id = $1`;
const updateCategory = `UPDATE category SET title = $1 id_color = $2 WHERE category.id = $3`;

module.exports = {
  getCategory,
  insertCategory,
  insertCategoryWithColor,
  updateCategory
}