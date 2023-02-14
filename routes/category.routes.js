const Router = require('express');
const router = Router();

const categoryController = require('../controller/category.controller');

router.post('/category', categoryController.addCategory);
router.get('/category', categoryController.getCategorys);
router.put('/category ', categoryController.updateCategory);

module.exports = router;