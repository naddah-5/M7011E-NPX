const gaussian = require('gaussian');

//objects
const MarketPrice = require('./marketprice');
const PowerPlant = require('./powerplant')
const House = require('./house')
const Region = require('./region')

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


//time intervall should be 1 sec = 1 hour
class init {
    constructor(){
        // params(region name, average temperature, temperature standard deviation, average wind speed, wind speed standard deviation)
        this.region = new Region("Luleå", 0, 3, 10, 4);
        //params(powerplant owner, max production, innertia, consumption)
        this.powerplant = new PowerPlant("Vattenfall", 100, 30, 1)
        this.population = house.list.length();

        this.house = new House("Anders Andersson", 5, [1, 2], 0, 1);
    }

    getTotalConsumption(){
        let census = house.list;
        let totalConsumption = 0;
        for (i = 0; census.length()-1; i++){
            // TODO: iterate over the house list and sum up the total consumption
        }
        return totalConsumption;
    }

    timeLoop() {
        console.log('Simulation running');
        
    }
}