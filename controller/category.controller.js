const db = require('../db');

class Category {
	async addCategory(req, res) {
		const {user_id, title} = req.body;
		const newCategory = await db.query(`
			INSERT INTO category (title, person_id)
			values ($1, $2)
		`, [title, user_id]);
		res.json(newCategory);	
	}
	async getCategorys(req, res) {
		const {user_id} = req.headers;
		const getCategorys = await db.query(`
			SELECT DISTINCT category.id, category.title
			FROM category	
			WHERE person_id = $1
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