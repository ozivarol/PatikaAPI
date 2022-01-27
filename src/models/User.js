const moongose = require("mongoose");


const UserSchema = new moongose.Schema({
    username: String,
    password: String,
})



module.exports = moongose.model("user", UserSchema)