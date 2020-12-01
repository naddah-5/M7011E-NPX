const User = require('../models/user');


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

