const User = require('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');


require('dotenv').config();
const SALT_WORK_FACTOR = 10;
const credentialFail = "Username or password incorrect.";

exports.create = async function (req, res, next) {
  console.log("in create function")

  User.findOne({"username": req.body.username}, (err, doc) => {
    if (doc) {
      res.sendStatus(401);
      return next("Username Taken");
    }
    let user = req.body;
    //generate salt then hash
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        User.create(user, (err, result) => {
          if (err) return next(err);
          return res.json(result);
        });
      });
    });
  });
}

exports.delete = async function (req, res, next) {
  console.log("in delete user function");

  await User.findOneAndRemove({"username": req.body.username}, (err, doc) => {
    if(!doc) {
      res.sendStatus(400);
      return next("No user found");
    }
    else {
      res.sendStatus(200);
      return next("User removed");
    }
  })
}


exports.login = async function (req, res, next) {
  if (req.body.username == null || req.body.password == null) {
    console.log(credentialFail);
    res.sendStatus(401);
    return next();
}
  let match = await User.findOne({'username': req.body.username});
  let passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if(match && passwordMatch){
    let token = jwt.sign({
        username: match.username,
        manager: match.manager,
    }, process.env.JWT_ACCESS_TOKEN,{expiresIn: "60m"});
    // maxAge is a expiration timer defined in _milliseconds_, currently set to 1 hour, http cookie as we only need to store the token
    // the cookie bellow will be named 'token' and will contain the token variable i.e. the JWT.
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    console.log(token);
  }
  else{
    console.log(credentialFail);
    res.sendStatus(401);
  }
};