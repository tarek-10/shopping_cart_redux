const mongoose = require("mongoose");
const productSchema = require("../schema/product.schema");

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;