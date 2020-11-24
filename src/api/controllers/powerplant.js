const powerplant = require("../models/powerplant");
const Powerplant = require("../models/powerplant");

// LOAD from ID
exports.load = function (req, res, next, id) {
  Powerplant.findById(id)
    .exec()
    .then(
      (powerplant) => {
        req.dbPowerplant = powerplant;
        return next();
      },
      (err) => next(err)
    );
};
// GET ByOwner
exports.getByOwner = function (req, res, next) {
  powerplant.find({ owner: req.params.owner} , (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
}
// GET Singular
exports.get = function (req, res, next) {
  return res.json(req.dbPowerplant);
};

// GET Plural
exports.list = function (req, res, next) {
  Powerplant.find({}, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// POST Create
exports.create = function (req, res, next) {
  Powerplant.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// PUT Update
exports.update = function (req, res, next) {
  Powerplant.updateOne(req.dbPowerplant, req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// DELETE
exports.remove = function (req, res, next) {
  Powerplant.deleteOne(req.dbPowerplant, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// DELETE All
exports.removeAll = function (req, res, next) {
  Powerplant.deleteMany({}, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};
