const express = require('express');

const { GetAllProducts, GetAllProductsStatic } = require('../controllers/products');

const router = express.Router();

router.route('/').get(GetAllProducts);
router.route('/static').get(GetAllProductsStatic);


module.exports = router;
