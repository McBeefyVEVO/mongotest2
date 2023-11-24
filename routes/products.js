var express = require('express')
var router = express.Router()
const productsController = require("../controllers/products")


router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct)
router.patch('/:id', productsController.patchProduct)
router.delete('/:id', productsController.deleteProduct)

module.exports = router