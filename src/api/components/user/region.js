"use strict"

const gaussian = require('gaussian');

module.exports = class region {
    constructor(name, averageTemperature, temperatureDeiation, averageWindSpeed, windSpeedDeviation) {
        this.name = name;
        this.averageTemperature = averageTemperature;
        this.temperatureDeviation = temperatureDeiation;
        this.averageWindSpeed = averageWindSpeed;
        this.windSpeedDeviation = windSpeedDeviation;
        
        this.currentTemperature = gaussian(averageTemperature, temperatureDeiation);
        this.currentWindSpeed = gaussian(averageWindSpeed, windSpeedDeviation);
    }
}