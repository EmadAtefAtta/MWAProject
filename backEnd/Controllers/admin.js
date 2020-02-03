

const Product = require('../Modules/products');


// add new product
const handleAddProduct= function(req, res, next) {
   
     var product=new Product({productName:req.body.productName,
      productType:req.body.productType,
      
      // productPicture:[Object],
      productPrice:req.body.productPrice,
        productDetail:req.productDetail  } );
    
          product.save(function (err) {
              if (err) {
                  return next(err);
              }
              res.send('Product Created successfully')
          })
      };
  
// remove a product by Product_id

const handleRemoveProduct =function(req,res,next){
  
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

     // update a product  by Product_id
const handleUpdateProduct =function(req,res,next){
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    if (err) return next(err);
    res.send('Product udpated.');
});
};

  module.exports={handleAddProduct,handleRemoveProduct,handleUpdateProduct}