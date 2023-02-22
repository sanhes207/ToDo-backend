const Router = require('express');
const router = new Router();

const colorController = require("../controller/color.controller");

router.get('/color', colorController.getColor);

module.exports = router;