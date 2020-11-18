const { Schema } = require("mongoose");

const pointSchema = new Schema({
    location: { //GeoJSON
        type: String,
        enum: ['Point'],
        require: true
    },
    coordinates: {
        type: [Number],
        require: true
    }
});

module.exports = mongoose.model("Point", pointSchema);
