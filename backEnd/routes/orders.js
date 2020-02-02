var express = require('express');
var router = express.Router();
const { handleAddToCart, handleMakePayment } = require('../Controllers/orders')

/* GET home page. */

// make payment
router.post('/makePayment', handleMakePayment);

//add to cart 
router.post('addToCart', handleAddToCart)


module.exports = router;
