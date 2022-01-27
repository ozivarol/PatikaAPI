const express = require("express")
const UserController = require("../controllers/UserController")
const schemas = require("../validations/User")
const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")

const router = express.Router();


router.route("/register").post(validate(schemas.createUser, "body"), UserController.create)
router.route("/login").post(validate(schemas.loginUser, "body"), UserController.login);
module.exports = router