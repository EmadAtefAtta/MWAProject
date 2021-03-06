

const Product = require('../Modules/products');


// add new product
const handleAddProduct = function (req, res, next) {
 
  var product = new Product({
    productName: req.body.productName,
    productType: req.body.productType,
    productPicture: req.body.Pictures,
    productPrice: req.body.productPrice,
    productDetail: req.body.productDetail
  });
  console.log(product)
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json({success: 1, msg: 'Product Created successfully'})
  })
};

// remove a product by Product_id

const handleRemoveProduct = function (req, res, next) {
console.log("req.params.id")
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.json({success: 1, msg: 'Product deleted successfully'});
  })
};

// update a product  by Product_id
const handleUpdateProduct = function (req, res, next) {
   Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.json('Product udpated.');
  });
};

module.exports = { handleAddProduct, handleRemoveProduct, handleUpdateProduct }