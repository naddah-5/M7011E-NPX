"use strict"; 

const express = require("express");
let userCtrl = require('../controllers/user')

var router = express.Router();

// Sanity test, use this to verify that everything works up until this point.

router
  .route('/')
    .get(userCtrl.login)
    .post(userCtrl.create); 

module.exports = router;
