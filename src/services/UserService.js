const User = require("../models/User")
const BaseService = require("../services/BaseServices")

class UserService extends BaseService {
    constructor() {
        super(User)
    }
}

module.exports = new UserService()