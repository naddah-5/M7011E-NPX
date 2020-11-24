const { Schema, model } = require("mongoose");

const batterySchema = new Schema({
  minCapacity: {
    type: Number,
    default: 0,
  },
  capacity: {
    type: Number,
    required: true,
  },
  charge: {
    type: Number,
    default: 0,
  },
  chargeRate: {
    type: Number,
    default: 200,
  },
});

module.exports = model("Battery", batterySchema);

