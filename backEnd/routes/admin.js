var express = require('express');
var router = express.Router();

/* GET home page. */
/// add product 
///remove product
///update product 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
