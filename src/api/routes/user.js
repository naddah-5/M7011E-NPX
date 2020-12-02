"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const credentialFail = 'Username or password incorrect.';

let user = require('../controllers/user')

var router = express.Router();

router.use(express.json());


// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
    res.send('This is a sanity test for log in.')
})



module.exports = router;