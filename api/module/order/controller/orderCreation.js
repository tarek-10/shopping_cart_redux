const {
    StatusCodes
} = require("http-status-codes");
const orderModel = require("../../../model/orderModel");


const create_order = async (req, res) => {

    let {
        name,
        email
    } = req.body;

    try {
        const order = await orderModel.insertMany({
            name,
            email
        });
        res.status(StatusCodes.CREATED).json({
            message: "success",
            order
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}

module.exports = create_order;