const User = require('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');


require('dotenv').config();
const SALT_WORK_FACTOR = 10;
const credentialFail = "Login Failed";

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
exports.login = async function (req, res, next) {
  if (req.body.username === null || req.body.password === null) {
    res.sendStatus(401);
    return next();
  }
  await User.findOne({'username': req.body.username}, (err, user) => {
    console.log(user);
    if (err) return next(err);
  }).exec().then((user) => {
    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      if (err) return next(err);
      if (isMatch) {
        jwt.sign({
          'username': req.body.username,
          'manager': req.body.manager
        },
          process.env.JWT_ACCESS_TOKEN_KEY, {algorithm: 'RS256'}, (err, token) => {
            if (err) return next(err);
            res.sendStatus(200);
            return res.json(token);
          });
      } else {
        res.sendStatus(403);
        return next();
      }
    });
  });
}
