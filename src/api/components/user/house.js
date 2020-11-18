"use strict";

let Battery = require("./battery");
let WindTurbine = require("./windturbine");

class House {
    constructor(id, capacity, marketPrice, location, temperature, windSpeed, consumption, greed){
        this.id = id;
        this.Battery = new Battery(id, capacity);
        this.WindTurbine = new WindTurbine(id);
        this.marketPrice = marketPrice;
        this.location = location;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.consumption = consumption; // roughly 100 kWh
        this.greed = greed; 
    }
		getOwner(){ return this.id; } 
		setOwner(id){ this.id = id; } 

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
