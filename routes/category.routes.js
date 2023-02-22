const Router = require('express');
const router = new Router();
const colorRouter = require('./color.routes')

const categoryController = require('../controller/category.controller');

router.post('/category', categoryController.addCategory);
router.get('/category', categoryController.getCategorys);
router.put('/category ', categoryController.updateCategory);

router.use('/category', colorRouter);

module.exports = router;