"use strict"; 
// imports 
const express = require("express");
var router = express.Router();
var House = require("../models/house");

//SCHEMA

//ROUTES
router
    .route("/:id?")
            //Get requests 3 200 responses
    .get( (req, res) => {
        if ( req.params.id === undefined) { //get collection of houses
            res.send("multiple houses");
        } else if( false ){                 //get specific house
            res.send(req.params.id);
        } else {                            //house doesnt exist
            House.find({}, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            })
        }
    })
    .post( (req, res) => {
        console.log(req.body);
    });

module.exports = router;
