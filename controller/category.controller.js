const db = require('../db');

class Category {
	async addCategory(req, res) {
		const {title, id_color} = req.body;
		const newCategory = await (`
			INSERT INTO category (title, id_color)
			VALUES ($1, $2)
		`, [title, id_color]);
		res.json('Новая категория была создана');	
	}
	async getCategorys(req, res) {
		const {user_id} = req.headers;
		const getCategorys = await db.query(`
			SELECT DISTINCT category.id, category.title
			FROM category
			INNER JOIN task
			ON task.id_category = category.id
			WHERE task.id_person = $1
		`, [user_id]);
		res.json(getCategorys.rows);
	}
	async updateCategory(req, res) {
		const {category_id, title, id_color} = req.body;
		const category = await db.query(`
		UPDATE category
		SET title = $1
				id_color = $2
		WHERE category.id = $3
		`, [title, id_color, category_id]);
		res.json(category.rows[0]);
	}
}

module.exports = new Category();