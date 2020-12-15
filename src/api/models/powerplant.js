const { Schema, model } = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");
const Battery = require("./battery").schema;

const powerplantSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    battery: {
        type: Battery,
        required: true
    },
    location: {
      type: [Number],
      validate: (v) => Array.isArray(v) && v.length == 2,
    },
    minProduction: {
        type: Number,
        default: 0
    },
    maxProduction: {
        type: Number,
        default: 100 // 100 000 MWh
    },
    production: {
        type: Number,
        default: 0
    },
    innertia: {
        type: Number,
        default: 30 // interperate as 30 minutes
    },
    consumption: {
        type: Number,
        default: 100  // this should be fine tuned!
    }
});

powerplantSchema.plugin(timestamps);
powerplantSchema.plugin(mongooseStringQuery);

module.exports = model("Powerplant", powerplantSchema);
