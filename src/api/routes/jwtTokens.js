"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');

var router = express.Router();

router.use(express.json());

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]
// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
  res.send('This is a sanity test.')
})

router.get('/posts', (req, res) => {
  res.send(posts);
})

router.post("/", (req, res) => {
  // Authenticate user here!

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);
  res.json({ accessToken: accessToken  })
})


module.exports = router;