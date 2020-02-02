const mongoose = require('mongoose');

var productSchema= mongoose.Schema({
    productName:String,
    productType:String,
    productPrice:String,
    productPicture:[Object],
    productDetail:String
});

userSchema.pre('save', function (next) {

    let currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt) {
        this.createdAt = currentDate;
    }

    next();
});

productSchema.query.getAllProduct=function(){
    return this.find({});
}
productSchema.query.getOneProduct=function(id){
    return this.findOne({_id:id});
}


module.exports=mongoose.model('products',productSchema);