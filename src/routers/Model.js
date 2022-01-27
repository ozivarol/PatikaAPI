const express = require("express")
const ModelController = require("../controllers/ModelController")
const authenticate = require("../middlewares/authenticate")

const router = express.Router()

router.route("/create").post(authenticate, ModelController.create)
router.route("/list").get(authenticate, ModelController.index)



module.exports = router