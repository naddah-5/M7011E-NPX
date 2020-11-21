const { Schema, model } = require("mongoose");


const batterySchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    minCapacity:{
        type: Number,
        default: 0
    },
    capacity:{
        type: Number,
        required: true
    },
    charge:{
        type: Number,
        default: 0
    },
    chargeRate:{
        type: Number,
        default: 200
    }
})


modules.export = model("Battery", batterySchema);