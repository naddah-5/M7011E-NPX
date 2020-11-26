"use strict"; 
const express = require("express");
const powerplantCtrl = require("../controllers/powerplant");
var router = express.Router();

// collection of houses
router
  .route("/")
  .get(powerplantCtrl.list)
  .post(powerplantCtrl.create)
  .delete(powerplantCtrl.removeAll);

// By ID
router
  .route("/:id")
  .get(powerplantCtrl.get)
  .put(powerplantCtrl.update)
  .delete(powerplantCtrl.remove);

router
  .route("/owner/:owner")
  .get(powerplantCtrl.getByOwner);

router.param("id", powerplantCtrl.load);

module.exports = router;
