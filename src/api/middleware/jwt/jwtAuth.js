"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');


console.log('passing through authentication');


const router = express();
router.use(express.json());


// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
  res.send('This is a sanity test.')
})

exports.authenticateToken = async function(req, res, next) {
  let token = req.cookies.token;
  if (token == null) {
    console.log('token not found');
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


module.exports = router;