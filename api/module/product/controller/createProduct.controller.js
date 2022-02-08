const {
    StatusCodes
} = require("http-status-codes");
const {
    fileURLToPath
} = require("url");
const productModel = require("../../../model/product.model");

const createProducts = async (req, res) => {

    let {
        title,
        imageUrl,
        desc,
        price,
        sizes
    } = req.body;
    try {
        let imageExtention = process.env.ImageUrls + req.file.filename;
        let sizeData = [];
        if (req.body.sizes) {
            let data = sizes.split(",");
            sizeData.push(data);
        }
        const isExist = await productModel.findOne({
            title
        });
        if (isExist) {
            res.json({
                message: "product already exist...!"
            })
        } else {
            const product = await productModel.insertMany({
                title,
                imageUrl: imageExtention,
                desc,
                price,
                sizes: sizeData
            });
            res.status(StatusCodes.CREATED).json({
                message: "success created product",
                product
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = createProducts;