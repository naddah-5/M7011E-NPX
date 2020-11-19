"use strict"; 
// imports 
const express = require("express");
var router = express.Router();
var House = require("../models/house");

//SCHEMA

//ROUTES
				//GET
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
        } else {                            
            House.findById(req.params.id, (err, result) => {
                if (err) {
										res.json(err);
								} else {
                res.json(result);
								}
            })
        }
    });
					//POST
/*
router.post("/", (req, res, next) => {
          House.create(req.body, (err, post) => {
            if (err) return next(err);
            res.json(post);
          });
        });
*/
router.post("/:id", (req, res) => {
          console.log(req.params.id);
          House.findOneAndUpdate( req.params.id, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
        });
      });

module.exports = router;
