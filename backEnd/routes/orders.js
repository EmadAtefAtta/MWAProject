var express = require('express');
var router = express.Router();

/* GET home page. */
//add to cart 
// make payment
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
