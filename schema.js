const Joi = require("joi");

module.exports.itemSchema = Joi.object({
    item: Joi.object(
        {
            title: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().min(0).required(),
            category: Joi.string().required(),
            stock: Joi.number().min(0).required(),
            brand: Joi.string().required(),
            image: Joi.string().allow("", null),
        }
    ).required()
});