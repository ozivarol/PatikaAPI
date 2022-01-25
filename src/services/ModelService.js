const Model = require("../models/Model")
const BaseService = require("../services/BaseServices")

class ModelService extends BaseService {
    constructor() {
        super(Model)
    }
}

module.exports = new ModelService()