const House = require("../models/house");
const LocCtrl = require("./location");

// LOAD from ID
exports.load = function (req, res, next, id) {
  console.log("load");
  House.findById(id)
    .exec()
    .then(
      (house) => {
        req.dbHouse = house;
        return next();
      },
      (err) => next(err)
    );
};

// GET by owner
exports.getByOwner = function (req, res, next) {
  House.find({ owner: req.params.owner }, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// GET Singular
exports.get = function (req, res, next) {
  return res.json(req.dbHouse);
};

// GET Plural
exports.list = function (req, res, next) {
  House.find({}, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// POST Create
exports.create = function (req, res, next) {
  LocCtrl.isVacant(req.body.location).then(
    (isVacant) => {
      if (isVacant) {
        House.create(req.body, (err, result) => {
          if (err) return next(err);
          return res.json(result);
        });
      } else {
        return next("Not Vacant");
      }
    },
    (err) => next(err)
  );
};

// PUT Update
exports.update = function (req, res, next) {
  LocCtrl.isVacant(req.body.location).then(
    (isVacant) => {
      if (isVacant) {
        House.updateOne(req.dbHouse, req.body, (err, result) => {
          if (err) return next(err);
          return res.json(result);
        });
      } else {
        return next("Not Vacant/exists");
      }
    },
    (err) => {
      return next(err);
    }
  );
};

// DELETE
exports.remove = function (req, res, next) {
  House.deleteOne(req.dbHouse, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};

// DELETE All
exports.removeAll = function (req, res, next) {
  House.deleteMany({}, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
};
