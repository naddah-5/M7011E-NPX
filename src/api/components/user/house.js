"use strict";

const Battery = require("./battery");
const WindTurbine = require("./windturbine");
const MarketPrice = require("./marketprice")

module.exports = class House {
    constructor(owner, capacity, location, temperature, greed){
		this.owner = owner;
		this.Battery = new Battery(id, capacity);
        this.WindTurbine = new WindTurbine(id);
        this.marketPrice = 0;
        this.location = location;
        this.temperature = temperature;
        this.windSpeed = 0;
        this.consumption = 0; // roughly 100 kWh
        this.greed = greed; 
	}

		getOwner(){ return this.owner; } 
		setOwner(owner){ this.owner = owner; } 

		getBattery(){ return this.Battery; } 
		setBattery(capacity, id=this.id){ this.Battery.setCapacity(capacity); this.Battery.setOwner(id); } 

		getWindTurbine(){ return this.WindTurbine; } 
		setWindTurbine(id){ this.WindTurbine(id); } 

		getMarketPrice(){ return this.marketPrice; } 
		setMarketPrice(){ this.marketPrice = marketPrice; } 

		getLocation(){ return this.location; } 
		setLocation(location){ this.location = location; } 

		getWindSpeed(){ return this.windSpeed; } 
		setWindSpeed(windSpeed){ this.windSpeed = windSpeed; } 

		getTemperature(){ return this.temperature; } 
		setTemperature(temperature){ this.temperature = temperature; } 

		getConsumption(){ return this.consumption; } 
		setConsumption(consumption){ this.consumption = consumption; } 

		getGreed(){ return this.greed; } 
		setGreed(greed){ this.greed = greed; } 
}
