"use strict";

module.exports = class windturbine{
    constructor(id, owner){
        this.id = id;
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
    getId(){
        return this.id;
    }
    setId( id ){
        this.id = id;
    }
    getOwner(){
        return this.owner;
    }
    setOwner(owner){
        this.owner = owner;
    }
    getEfficency(){
        return this.efficency;
    }
    setEfficency(efficency){
        this.efficency = efficency;
    }
    getWindSpeed(){
        return this.windSpeed;
    }
    setWindSpeed(windSpeed){
        this.windSpeed = windSpeed;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
    getMinProduction(){
        return this.maxProduktion;
    }
    setMinProduction(minProduction){
        this.minProduction =  minProduction;
    }
    getMaxProduction(){
        return this.maxProduktion;
    }
    setMaxProduction(maxProduction){
        this.maxProduktion = maxProduction;
    }
    getMinWindSpeed(){
        return this.minWindSpeed;
    }
    setMinWindSpeed(minWindSpeed){
        this.minWindSpeed = minWindSpeed;
    }
    getMaxWindSpeed(){
        return this.maxWindSpeed;
    }
    setMaxWindSpeed(maxWindSpeed){
        this.maxWindSpeed = maxWindSpeed;
    }
    
}
