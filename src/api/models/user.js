const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    // make passwords encrypted
    Hpassword: {
        type: String,
        required: true
    },
    // if the user is not a manager then it is by default a prosumer
    manager:{
        type: Boolean,
        default: false
    }
    // could add a special case for admins here, not sure that it would be the best solution
});

module.exports = model("User", userSchema);