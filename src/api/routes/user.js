"use strict"; 

const express = require("express");
let userCtrl = require('../controllers/user')

var router = express.Router();

router
  .route('/')
    .get(userCtrl.login)
    .delete(userCtrl.delete)
    .post(userCtrl.create);

module.exports = router;
