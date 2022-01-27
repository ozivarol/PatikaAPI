const moongose = require("mongoose");


const ModelSchema = new moongose.Schema({
    görev: {
        id: {
            type: Number,
            unique: true
        },
        agv_id: {
            type: String,
            unique: true
        },
        description: String
    }



},
    {
        timestamps: true,
        versionKey: false
    })

ModelSchema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc,
    });
});
module.exports = moongose.model("model", ModelSchema);