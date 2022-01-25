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


module.exports = moongose.model("model", ModelSchema);