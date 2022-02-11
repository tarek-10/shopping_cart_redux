const Joi = require('joi');

module.exports = {

    createProduct: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            desc: Joi.string().required(),
            price: Joi.string().required(),
            sizes: Joi.string().required().trim()
        }),
        file: Joi.object().required()
    }
}