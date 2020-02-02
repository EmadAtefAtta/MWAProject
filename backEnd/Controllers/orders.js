

const handleAddToCart = function (req, res, next) {
    res.end("handleAddToCart")
}
const handleMakePayment = function (req, res, next) {
    res.end("handleMakePayment")
}

module.exports = { handleAddToCart, handleMakePayment }