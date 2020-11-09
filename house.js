"use strict";

let Battery = require("./battery");
let WindTurbine = require("./windturbine");

class House {
    constructor(owner, capacity, marketPrice, location, temperature, windSpeed, consumption, greed){
        this.owner = owner;
        this.Battery = new Battery(owner, capacity);
        this.WindTurbine = new WindTurbine(owner);
        this.marketPrice = marketPrice;
        this.location = location;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.consumption = consumption; // roughly 100 kWh
        this.greed = greed;
    }
}
