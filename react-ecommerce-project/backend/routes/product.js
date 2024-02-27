
const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts); // GET all products
router.route('/products/:id').get(getSingleProduct); // GET single product by ID


// export default router; 
module.exports = router;