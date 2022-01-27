const Model = require("../models/Model")
const BaseService = require("../services/BaseServices")

class ModelService extends BaseService {
    constructor() {
        super(Model)
    }
    list(where) {
        return Model.find(where || {}).populate({
            path: "görev",
        })
    }
}

module.exports = new ModelService()