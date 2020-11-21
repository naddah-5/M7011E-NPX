//modules
const { Schema, model, ObjectID }  = require("mongoose");
const timestamps = require("mongoose-timestamp");
const mongooseStringQuery = require("mongoose-string-query");

//import schema

const houseSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  owner:{
    type: String,
    required: true
  },
  battery: Number,
  windturbine: Number,
  marketPrice: Number,
  location: { //GeoJSON
	  type: [Number],
	  validate: v => Array.isArray(v) && v.length == 2
  },
  temperature: {
    type: Number,
    default: 0
  },
  windSpeed: {
    type: Number,
    default: 0
  },
  consumption: {
    type: Number,
    default: 100
  },
  greed: {
    type: Number,
    default: 1
  }
});

houseSchema.plugin(timestamps);
houseSchema.plugin(mongooseStringQuery);

module.exports = model("House", houseSchema)
