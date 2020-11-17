"use strict"; 
const express = require("express");
const router = express.Router();

router
// /houses/
.route("/")
.get( (req, res) => {
    res.send("houses");
})
.post((req, res) => {
});

module.exports = router;