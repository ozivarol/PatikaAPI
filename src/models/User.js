const moongose = require("mongoose");


const UserSchema = new moongose.Schema({
    username: String,
    password: String,
})

UserSchema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc,
    });
});



module.exports = moongose.model("user", UserSchema)