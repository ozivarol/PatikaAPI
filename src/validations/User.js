const Joi = require("joi")
const { validationErrorHandler } = require("../scripts/utils/validationErrorHandler")

const createUser = Joi.object({
    username: Joi.string().required().min(3).error(validationErrorHandler),
    password: Joi.string().required().min(8).error(validationErrorHandler)
})

const loginUser = Joi.object({
    username: Joi.string().required().min(3).error(validationErrorHandler),
    password: Joi.string().required().min(8).error(validationErrorHandler)

})


module.exports = {
    createUser,
    loginUser,
}