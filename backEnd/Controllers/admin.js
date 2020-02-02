

const handleAddProduct= function(req, res, next) {
    res.render('index', { title: 'Express' });
  }


const handleRemoveProduct =function(req,res,next){
    res.end("reemove done")
}

const handleUpdateProduct =function(req,res,next){
    res.end ("product updated")
}

  module.exports={handleAddProduct,handleRemoveProduct,handleUpdateProduct}