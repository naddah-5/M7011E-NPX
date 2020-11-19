//modules
const { Schema, model, ObjectID }  = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");

//import schema

var houseSchema = new Schema({
    battery: Number,
    windturbine: Number,
    marketPrice: Number,
    location: { //GeoJSON
			type: [Number],
			validate: v => Array.isArray(v) && v.length == 2
		},
    windSpeed: Number,
    consumption: {type: Number, require: true},
    greed: Number
});

houseSchema.plugin(timestamps);
houseSchema.plugin(mongooseStringQuery);

module.exports = model("House", houseSchema)
