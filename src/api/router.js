let express = require('express');
//import express from 'express';
var router = express.Router();
const houses = require("./routes/houses");
const jwtTokens = require("./routes/jwtTokens");
const auth = require('./middleware/jwt/authServer.js');

router.use(express.json());

router.use('/houses', houses);
router.use('/jwtTokens', jwtTokens);
router.use('/middleware/jwt/authServer.js', auth);


// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
    let posts = 'This is a sanity test.'
    res.send(posts);
  })

//export default router;
module.exports = router;
