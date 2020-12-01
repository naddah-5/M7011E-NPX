const User = require('../models/user');
let jwt = require('jsonwebtoken');

require('dotenv').config()


exports.create = function (req, res, next) {
  if(!User.exists({'userName': req.body.userName})) {
      var user = req.body;
      //generate salt then hash
      bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.Hpassword, salt, (err, hash) => {
          if (err) return next(err);
          user.Hpassword = hash;
          next();
        });
      });
  return res.json(result);
  }
}

exports.login = async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
   
    if (username == null || password == null){
        console.log(credentialFail);
        res.sendStatus(401);
    }
    let match = await user.findOne({username: username});
    let passwordMatch = await bcrypt.compare(password, match.password);
    if(match && passwordMatch){
        let token = jwt.sign({
            username: match.username,
            manager: match.manager,
        }, process.env.JWT_ACCESS_TOKEN,{expiresIn: "60m"});
        // we need to update the cookie with the access token
    }
    else{
        console.log(credentialFail);
        res.sendStatus(401); //Unauthorized i.e. incorrect 
    }
}

