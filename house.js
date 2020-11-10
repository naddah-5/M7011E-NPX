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
		getOwner(){ return this.owner; } 
		setOwner(owner){ this.owner = owner; } 

		getBattery(){ return this.Battery; } 
		setBattery(capacity, owner=this.owner){ this.Battery.setCapacity(capacity); this.Battery.setOwner(owner); } 

		getWindTurbine(){ return this.WindTurbine; } 
		setWindTurbine(owner){ this.WindTurbine(owner); } 

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
