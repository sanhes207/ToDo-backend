const insertCategory = `INSERT INTO category (title, person_id, color_id) 
                                 VALUES ($1, $2, $3)`;
const getCategory = `SELECT DISTINCT 
                       category.id,
                       category.title AS title,
                       color.title AS color_title,
                       color.hex_code 
                     FROM category 
                     INNER JOIN color
                       ON color.id = category.color_id
                     WHERE person_id = $1`;
const updateCategory = `UPDATE category 
                        SET title = $1
                        id_color = $2 
                        WHERE category.id = $3`;

module.exports = {
  getCategory,
  insertCategory,
  updateCategory
}