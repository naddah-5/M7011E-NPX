"use strict"; 
// imports 
const express = require("express");
const { Schema } = require("mongoose");
var router = express.Router();

//SCHEMA

//ROUTES
router
    .route("/:id")
    .get( (req, res) => {
        //if id field empty, get all collections else, get specific endpoint
        // TODO Implement Mongoose collections
        if ( req.params.id === undefined) {
            res.send("multiple houses");
        } else if( false /*TODO id exist*/){
            res.send(req.params.id);
        } else {
            res.send("house doesnt exists");
        }
    })
    .post( (req, res) => {
        console.log(req.body);
    });

module.exports = router;
