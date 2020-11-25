"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');

var router = express.Router();

router.use(express.json());

console.log('passing through authServer');

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

router.get('/posts', authenticateToken, (req, res) =>{
  res.json(posts.filter(posts => posts.username === req.username));
})


router.post("/", (req, res) => {
  // Authenticate user here!

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN);
  res.json({ accessToken: accessToken  })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


module.exports = router;