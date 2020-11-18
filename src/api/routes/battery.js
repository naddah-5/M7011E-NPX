"use strict"; 
const express = require("express");
var router = express.Router();

// collection of houses
router
    .route("/:id")
    .get( (req, res) => {
        //if id field empty, get all collections else, get specific endpoint
        // TODO Implement Mongoose collections
      req.params.id === undefined ? res.send("windmills") : res.send(req.params.id)
    })
    .post((req, res) => {
    });

module.exports = router;


