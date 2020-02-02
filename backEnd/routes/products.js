var express = require('express');
var router = express.Router();
const{handleaGetProducts,handleGetProduct} =require('../Controllers/products')
router.get('/AllProducts', handleaGetProducts);

router.get('/AllProducts/:id', handleGetProduct);

module.exports=router