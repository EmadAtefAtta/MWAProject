
const products=require("../modules/products");



const handleaGetProducts = async function (req, res, next) {
    let productlist=await products.find().getAllProduct(); 
        
        res.send(productlist);
    
};

    

const handleGetProduct=async function(req,res,next){
    
      let oneProduct=await products.find().geOneProduct(req.params.id);
          
            res.send(oneProduct);
        
    };


module.exports={handleaGetProducts,handleGetProduct}