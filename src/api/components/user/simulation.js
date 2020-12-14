const gaussian = require('gaussian');

//controll systems
const battery = require('./battery');
const house = require('../../controllers/house');
const location = require('../../controllers/location');
const powerplant = require('../../controllers/powerplant');
const user = require('../../controllers/user');

//schemas, might be a good idea to refactor these to plural form
const batteries = require('../../models/battery');
const houses = require('../../models/house');
const powerplants = require('../../models/powerplant');
const users = require('../../models/user');

//these variables should probably be moved to .env or a config file

//average wind speed in the region (km/h)
let regionMeanWindspeed = 14;
let regionStandardDeviationWindspeed = 2;
let regionMeanTemperature = 0;
let regionStandardDeviationTemperature = 6;

//time intervall should be 1 sec = 1 hour
class Simulation {
    constructor(){
        this.windspeed = gaussian(regionMeanWindspeed, regionStandardDeviationWindspeed);
        this.temperature = gaussian(regionMeanTemperature, regionStandardDeviationTemperature);
        this.population = house.list.length();
        this.marketDemand = 0 + (gaussian(3000*this.population*this.temperature));
        // market demand and market price should remain seperated to make future changes easier.
        this.MarketPrice = this.marketDemand;
    }

    getTotalConsumption(){
        let census = house.list;
        let totalConsumption = 0;
        for (i = 0; census.length()-1; i++){
            // TODO: iterate over the house list and sum up the total consumption
        }
        return totalConsumption;
    }
    

}

let standardDistribution = gaussian(0, 1);