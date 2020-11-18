//modules
const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");
const { Schema } = mongoose;

//import schema
let Point = require("./point").schema;

const houseSchema = new Schema({
    id: Schema.ObjectId,
    battery: Number,
    windturbine: Number,
    marketPrice: Number,
    location: { //GeoJSON
        type: Point,
    },
    windSpeed: Number,
    consumption: {type: Number, require: true},
    greed: Number
});

houseSchema.plugin(timestamps);
houseSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model("House", houseSchema)
