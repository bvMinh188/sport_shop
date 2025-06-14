const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Get all products
router.get('/products', productController.getAllProducts);

// Get product by ID
router.get('/products/:id', productController.getProductById);

// Search products
router.get('/products/search', productController.searchProducts);

// Filter products
router.get('/products/filter', productController.filterProducts);

// Get products by category
router.get('/products/category/:category', productController.getByCategory);

// Create new product
router.post('/products', productController.createProduct);

// Update product
router.put('/products/:id', productController.updateProduct);

// Delete product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router; 