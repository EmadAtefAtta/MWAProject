
const products = require("../Modules/products");

const handleaGetProducts = async function (req, res, next) {
    let productlist = await products.find().getAllProduct();
    res.json(productlist);

};



const handleGetProduct = async function (req, res, next) {
 
    let oneProduct = await products.find().getOneProduct(req.params.id);
console.log(oneProduct)
    res.json(oneProduct);

};


module.exports = { handleaGetProducts, handleGetProduct }