const express = require('express');

const router = express.Router();
const CategoriesControllers = require('../controllers/CategoriesControllers');

router.post('/', CategoriesControllers.postCategory);

module.exports = router;
