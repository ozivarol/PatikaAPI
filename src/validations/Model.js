const Joi = require("joi")
const { validationErrorHandler } = require("../scripts/utils/validationErrorHandler")

const addModel = Joi.object({
    id: Joi.number().required().min(1).error(validationErrorHandler),
    agv_id: Joi.string().required().min(1).error(validationErrorHandler),
    description: Joi.string().required().min(1).error(validationErrorHandler)

})


module.exports = {
    addModel,
}