const router = require('express').Router();
const { createNewProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../models/productModel')

router.post('/', createNewProduct)

router.get('/', getProducts)
router.get('/:id', getProductById)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)


module.exports = router;