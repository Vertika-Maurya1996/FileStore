var express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
var router = express.Router();
const UserController = require("../controllers/UserController")

router.post('/login',UserController.userLogin);

module.exports = router;
