"use strict"

const gaussian = require('gaussian');
const MarketPrice = require('./marketprice')

module.exports = class region {
    constructor(name, averageTemperature, temperatureDeiation, averageWindSpeed, windSpeedDeviation) {
        this.name = name;
        this.marketPrice = new MarketPrice(name);
        this.averageTemperature = averageTemperature;
        this.temperatureDeviation = Math.abs(temperatureDeiation);
        this.averageWindSpeed = Math.abs(averageWindSpeed);
        this.windSpeedDeviation = Math.abs(windSpeedDeviation);
        
        this.currentTemperature = gaussian(averageTemperature, temperatureDeiation);
        this.currentWindSpeed = Math.abs(gaussian(averageWindSpeed, windSpeedDeviation));
    }

    itterateTemperature() {
        temperatureOffset = Math.abs(this.currentTemperature/this.averageTemperature);
        // the offset should not be implemented in average temperature (µ) as it could lead to significant drift over time.
        this.currentTemperature = gaussian(this.averageTemperature, Math.abs(this.temperatureDeviation * temperatureOffset));
    }

    getCurrentTemperature() {
        return this.currentTemperature;
    }

    getAverageTemperature() {
        return this.averageTemperature;
    }

    getTemperatureDeviation() {
        return this.temperatureDeviation;
    }

    itterateWindSpeed() {
        windSpeedOffset = Math.abs(this.currentWindSpeed/this.averageWindSpeed);
        // the offset should not be implemented in average wind speed (µ) as it could lead to significant drift over time.
        this.currentWindSpeed = Math.abs(gaussian(this.averageWindSpeed, Math.abs(this.windSpeedDeviation * windSpeedOffset)));
    }

    getCurrentWindSpeed() {
        return this.currentWindSpeed;
    }

    getAverageWindSpeed() {
        return this.averageWindSpeed;
    }

    getWindSpeedDeviation() {
        return this.windSpeedDeviation;
    }
}