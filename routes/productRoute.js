const express = require('express')
const {getAllProducts, getOneProduct, createOneProduct, updateOneProduct, deleteOneProduct} = require('../controller/productController')

const router = express.Router()


router.route('/products').get(getAllProducts).post(createOneProduct)
router.route('/products/:id').get(getOneProduct).put(updateOneProduct).delete(deleteOneProduct)


module.exports = router