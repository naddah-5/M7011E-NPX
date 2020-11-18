"use strict"; 
// imports 
const express = require("express");
var router = express.Router();
var House = require("../models/house");

//SCHEMA

//ROUTES
router
    .route("/:id?")
    .get( (req, res, next) => {
        if ( req.params.id === undefined) { //get collection of houses
            House.find({}, (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            })
        } else {                            //house doesnt exist
            House.findById(req.params.id, (err, result) => {
                if (err) return next(err);
                res.json(result);
            })
        }
    })
    .post( (req, res, next) => {
        House.create(req.body, (err, post) => {
            if (err) return next(err);
            res.json(post);
        });
    });

module.exports = router;
