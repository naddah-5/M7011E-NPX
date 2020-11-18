const { Schema } = require("mongoose");
let { Point } = require("./point")

const houseSchema = new Schema({
    id: {type: String, require: true},
    battery: Number,
    windturbine: Number,
    marketPrice: Number,
    location: { //GeoJSON
        type: Point,
        require: true
    },
    windSpeed: Number,
    consumption: {type: Number, require: true},
    greed: Number
});

module.exports = mongoose.model("house", houseSchema)
