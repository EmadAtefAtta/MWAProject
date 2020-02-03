var express = require('express');
var router = express.Router();
const {handleAddProduct,handleRemoveProduct,handleUpdateProduct} =require('../Controllers/admin')
 


 
/// add product 
router.post('/addProduct',handleAddProduct)

///remove product
router.delete('/removeProduct/:id',handleRemoveProduct)

///update product 
router.put('/updateProduct',handleUpdateProduct)



module.exports = router;
