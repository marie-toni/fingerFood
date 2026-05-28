const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../contollers/productController');


// Create Product & Get All Products
router.route('/')
  .post(createProduct)
  .get(getProducts);


// Get Single Product, Update Product & Delete Product
router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);


module.exports = router;