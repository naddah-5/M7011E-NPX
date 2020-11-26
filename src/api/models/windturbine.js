const { Schema, model } = require("mongoose");


const windturbineSchema = new Schema({
    efficency:{
        type: Number,
        default: 1 
    },
    windspeed:{
        type: Number,
        default: 0
    },
    status:{
        type: String,
        default: "Operational"
    },
    minProduction:{
        type: Number,
        default: 0
    },
    maxProduction:{
        type: Number,
        default: 500
    },
    production:{
        type: Number,
        default: 0
    },
    minWindSpeed:{
        type: Number,
        default: 0 // minimum wind speed to produce power 0 m/s by default
    },
    maxWindSpeed:{
        type: Number,
        default: 60 // maximum wind speed at which the turbine can safely opperate
                    // if this is exceeded while not shut down it should break.
    }
})


module.exports = model("Windturbine", windturbineSchema);
