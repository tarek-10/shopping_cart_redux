const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const {
    createProduct
} = require("../joi/product.validation");

const router = express.Router();
//Product Api

//create Product
const createProducts = require("../controller/createProduct.controller");
const upload = require("../../../middleware/multer");
router.post("/product/create", upload.single('image'), handleValidation(createProduct), createProducts)
//end

//get products
const displayProducts = require("../controller/getProducts.controller");
router.get("/product/display", displayProducts)
//end

//end

module.exports = router;