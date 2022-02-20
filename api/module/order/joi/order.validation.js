const Joi = require('joi');

module.exports = {

    createOrders: {
        body: Joi.object().required().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email()
        })
    },
    updateOrder: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
        body: Joi.object().required().keys({
            name: Joi.string().optional(),
            email: Joi.string().optional().email()
        })
    },
    deleteOrder: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    }
}