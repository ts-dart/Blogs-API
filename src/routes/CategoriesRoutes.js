const express = require('express');

const router = express.Router();
const CategoriesControllers = require('../controllers/CategoriesControllers');

router.post('/', CategoriesControllers.postCategory);
router.get('/', CategoriesControllers.getCategories);

module.exports = router;
