let express = require('express');
//import express from 'express';
var router = express.Router();
const houses = require("./routes/houses");
const jwtTokens = require("./routes/jwtTokens");
const auth = require('./middleware/jwt/jwtAuth');
const user = require('./routes/user')

router.use(express.json());

router.use('/houses', houses);
router.use('/jwtTokens', jwtTokens);
router.use('/jwtAuth', auth);
router.use('/user', user);


// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
  res.send('This is a sanity test.')
})

//export default router;
module.exports = router;
