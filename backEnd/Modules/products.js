const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema= new Schema({
    productName:String,
    productType:String,
    productPrice:String,
    productDetail:String,
    productPicture:[Object]
    
});

productSchema.pre('save', function (next) {

    let currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

productSchema.query.getAllProduct= function(){
    return this.find({});
}
productSchema.query.getOneProduct=function(id){
    return this.findOne({_id:id});
}
//add new products
//  productSchema.query.insertNewProduct=async function (newproducts){
//      return await this.insert({newproducts});
// }

 //update by Id  new products

productSchema.query.findByIdAndUpdate= function (id){
    return this.updatedAt({_id:id});
}

 //delete the product by id 

productSchema.query.findByIdAndRemove= function (id){
    return this.remove({_id:id});
}


  module.exports=mongoose.model('products',productSchema);