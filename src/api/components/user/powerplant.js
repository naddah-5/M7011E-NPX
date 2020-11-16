"use strict";

module.exports = class powerplant {
    constructor(owner, maxProduction, innertia, consumption){
        this.owner = owner;
        this.minProduction = 0;
        this.maxProduction = maxProduction;
        this.production = 0;
        this.innertia = innertia;
        this.consumption = consumption;
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