const express = require('express');

const router = express.Router();
const UserController = require('../controllers/UserControllers');

router.post('/', UserController.postUser);

module.exports = router;