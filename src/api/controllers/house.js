const House = require("../models/house");

// LOAD from ID
module.exports.load = function(req, res, next, id) {
  House.findById(id).exec().then((house) => {
    req.dbHouse = house;
    return next();
  }, (err) => next(err));
}

// GET Singular
module.exports.get = function(req, res, next) { 
    console.log("get"); 
    return res.json(req.dbHouse);
  }

// GET Plural 
module.exports.list = function(req, res, next) {
  House.find({}, (err, result) => {
    return res.json(result);
  }, (err) => next(err));
}

// POST Create
module.exports.create = function(req, res, next) {
  House.create(req.body, (err, result) => { 
    if (err) return next(err);
    return res.json(result);
  });
}

// PUT Update
module.exports.update = function(req, res, next) {
  House.updateOne(req.dbHouse, req.body, (err, result) => { 
    if (err) return next(err);
    return res.json(result);
  });
}

// DELETE 
module.exports.remove = function(req, res, next) {
  House.deleteOne(req.dbHouse, (err, result) => { 
    if (err) return next(err);
    return res.json(result);
  });
}

