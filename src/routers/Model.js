const express = require("express")
const ModelController = require("../controllers/ModelController")


const router = express.Router()

router.route("/create").post(ModelController.create)
router.route("/list").get(ModelController.index)



module.exports = router