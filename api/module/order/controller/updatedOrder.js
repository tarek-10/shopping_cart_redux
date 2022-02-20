const {
    StatusCodes
} = require("http-status-codes");
const orderModel = require("../../../model/orderModel");

const updateOrders = async (req, res) => {

    let {
        id
    } = req.params;

    let {
        body
    } = req;

    try {
        const order = await orderModel.findOne({
            _id: id
        });

        if (order) {

            const updateOrder = await orderModel.findOneAndUpdate({
                _id: order._id
            }, {
                $set: body
            }, {
                new: true
            });

            res.status(StatusCodes.OK).json({
                message: "success",
                updateOrder
            });

        } else {
            res.json({
                message: "in-valid order...!"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = updateOrders;