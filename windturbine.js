"use strict";

module.exports = class windturbine{
    constructor(owner){
        this.owner = owner;
        this.efficency = 1;
        this.windSpeed = 0;
        this.status = "Operational";
        this.minProduction = 0;
        this.maxProduktion = 500;
        this.production = 0;
        this.minWindSpeed = 0;
        this.maxWindSpeed = 60;
    }
}
