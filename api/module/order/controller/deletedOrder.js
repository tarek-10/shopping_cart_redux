const {
    StatusCodes
} = require("http-status-codes");
const orderModel = require("../../../model/orderModel");

const deleteOrders = async (req, res) => {

    let {
        id
    } = req.params;
    try {

        const order = await orderModel.findOne({
            _id: id
        });

        if (order) {
            const deleteOrder = await orderModel.findOneAndDelete({
                _id: order._id
            });
            res.status(StatusCodes.OK).json({
                message: "success",
                deleteOrder
            })
        } else {
            res.json({
                message: "in-valid order ...!"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = deleteOrders;