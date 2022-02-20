const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const {
    createOrders,
    updateOrder,
    deleteOrder
} = require("../joi/order.validation");

const router = express.Router();

//create order
const create_order = require("../controller/orderCreation");
router.post("/order/create", handleValidation(createOrders), create_order)
//end

//update order
const updateOrders = require("../controller/updatedOrder");
router.put("/order/update/:id", handleValidation(updateOrder), updateOrders)
//end

//delete order
const deleteOrders = require("../controller/deletedOrder");
router.delete("/order/delete/:id", handleValidation(deleteOrder), deleteOrders)
//end

module.exports = router;