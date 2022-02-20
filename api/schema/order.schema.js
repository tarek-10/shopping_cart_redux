const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
module.exports = orderSchema;