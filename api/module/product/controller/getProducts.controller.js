const {
    StatusCodes
} = require("http-status-codes");
const productModel = require("../../../model/product.model");

const displayProducts = async (req, res) => {

    try {
        const product = await productModel.find({});
        res.status(StatusCodes.OK).json({
            message: "success",
            product
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = displayProducts;