const House = require("../models/house");
const Powerplant = require("../models/powerplant");

exports.isVacant = async function (location) {
  
  resHouse = await House.exists({'location': location});
  resPowerplant = await Powerplant.exists({'location': location});
  result = !(resHouse || resPowerplant);
  return result;
}
