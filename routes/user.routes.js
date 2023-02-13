const Router = require('express');
const router = Router();
const userController = require('../controller/user.controller');

router.get('/user/:name', userController.getUser);
router.post('/user', userController.createUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;