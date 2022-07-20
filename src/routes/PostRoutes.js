const express = require('express');

const router = express.Router();
const PostControllers = require('../controllers/PostControllers');

router.post('/', PostControllers.newPost);

module.exports = router;
