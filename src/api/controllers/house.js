const House = require("../models/house");

// LOAD from ID
module.load = function(req, res) {
  
}
// GET Singular
module.get = function(req, res, next) { 
  House.findById(req.params.id, (err, result) => {
    return res.json(result);
  }, (err) => next(err));
}

// GET Plural 
module.list = function(req, res, next) {
  House.find({}, (err, result) => {
    return res.json(result);
  }, (err) => next(err));
}

// POST Create
exports.create = function(req, res, next) {
  House.create(req.body, (err, post) => {
    return res.json(post);
  }, (err) => next(err));
}

// PUT Update
module.update = function(req, res, next) {
  House.findByIdAndUpdate(id, {
    new: true,
  }, (err, res) => { 
    if (err) return next(err);
    return res.json(res);
  });
}

// DELETE 
module.remove = function(req, res, next) {
  House.findByIdAndDelete(id, (err, res) => { 
    if (err) return next(err);
    return res.json(res);
  });
}

