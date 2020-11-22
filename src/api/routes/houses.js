"use strict"; 
// imports 
const express = require("express");
const houseController = require("../controllers/housetest");

var router = express.Router();
//ROUTES

router.route("/")
  .get(houseController.list, (req, res) => {
    console.log("test")
    })
  .post(houseController.create); 
// By ID
router.route("/:id")
  .get(houseController.get)
  .put(houseController.update)
  .delete(houseController.remove);

router.param("/:id", houseController.load);

module.exports = router;
