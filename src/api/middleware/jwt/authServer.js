"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');


console.log('passing through authServer');


const authServer = express();
authServer.use(express.json());
const port = process.env.AUTHORIZATION_SERVER_PORT || 4000;
function envCheck() {
  const authPort = process.env.AUTHORIZATION_SERVER_PORT;
  if (authPort == null) console.log('.env not found');
}
envCheck();

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
authServer.get('/sanity', (req, res) => {
  res.send('This is a sanity test.')
})

authServer.get('/posts', authenticateToken, (req, res) =>{
  res.json(posts.filter(post => post.username === req.user.name));
})


authServer.post("/login", (req, res) => {
  
  //
  // Authenticate user here!
  //

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_KEY);
  res.json({ accessToken: accessToken  })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

authServer.listen(port, () => console.log('Authorization server is listening to port ' + port));