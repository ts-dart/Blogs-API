const express = require('express');

const router = express.Router();
const LoginController = require('../controllers/LoginControllers');

router.post('/', LoginController.postLogin);

module.exports = router;
