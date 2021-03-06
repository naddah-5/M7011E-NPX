"use strict";
// imports
const express = require("express");
const houseController = require("../controllers/house");

var router = express.Router();

router.get('/sanity', (req, res) => {
    res.send('This is a sanity test.')
})

router.route("/")
  .get(houseController.list)
  .post(houseController.create)
  .delete(houseController.removeAll);

// By ID
router
  .route("/:id")
  .get(houseController.get)
  .put(houseController.update)
  .delete(houseController.remove);

router
  .route("/owner/:owner")
  .get(houseController.getByOwner);

router.param("id", houseController.load);

module.exports = router;
