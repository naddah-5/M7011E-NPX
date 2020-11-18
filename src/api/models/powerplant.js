const { Schema, model } = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");

const powerplantSchema = new Schema({
    id: Schema.ObjectId,
    minProduction: {
        type: Number,
        default: 0
    },
    maxProduction: Number,
    production: {
        type: Number,
        default: 0
    },
    innertia: Number,
    consumption: Number
});

houseSchema.plugin(timestamps);
houseSchema.plugin(mongooseStringQuery);

modules.export = model("Powerplant", powerplantSchema);
