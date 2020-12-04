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
  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (err, username) => {
    if (err) return res.sendStatus(403);
    //this line should check if the claimed username matches the username in the JWT token
    //if something breaks I would start by checking this one.
    else if (req.body.username != username) return res.sendStatus(403);
    next();
  });
}


module.exports = router;