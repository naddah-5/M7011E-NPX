const { Schema, model } = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");

const powerplantSchema = new Schema({
    id: Schema.ObjectId,
    owner: {
        type: String,
        required: true
    },
    minProduction: {
        type: Number,
        default: 0
    },
    maxProduction: {
        type: Number,
        default: 100000000 // 100 000 MWh
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

houseSchema.plugin(timestamps);
houseSchema.plugin(mongooseStringQuery);

modules.export = model("Powerplant", powerplantSchema);
