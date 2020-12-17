"use strict";

const Battery = require('./battery');
const Region = require('./region');
const Grid = require('./grid');

module.exports = class powerplant {
    constructor(owner, maxProduction, innertia, consumption){
        this.owner = owner;
        this.minProduction = 0;
        this.maxProduction = maxProduction;
        this.production = 0;
        this.battery = new Battery(this.owner, 20);
        this.innertia = innertia;
        this.consumption = consumption;
        this.productionCost = 0;
        this.electricitySold = 0;
        this.storedCash = 0;
    }

    produceElectricity() {
        this.battery.setCharge(this.battery.getCharge() + this.production);
    }
    sellElectricity(amount, marketPrice) {
        if(marketPrice > this.productionCost && this.battery.getCharge() >= amount) {
            this.electricitySold += amount;
            this.storedCash += amount * marketPrice;
            this.battery.setCharge(this.battery.getCharge()-amount);
        }
    }
    getOwner(){
        return this.owner;
    }
    setOwner(owner){
        this.owner = owner;
    }
    getMinProduction(){
        return this.minProduction;
    }
    setMinProduction(minProduction){
        this.minProduction = minProduction
    }
    getMaxProduction(){
        return this.maxProduction;
    }
    setMaxProduction(maxProduction){
        this.maxProduction = maxProduction;
    }
    getProduction(){
        return this.production;
    }
    setProduction(production){
        this.production = production;
    }
    getInnertia(){
        return this.innertia;
    }
    setInnertia(innertia){
        this.innertia = innertia;
    }
    getConsumption(){
        return this.consumption;
    }
    setConsumption(consumption){
        this.consumption = consumption;
    }
}