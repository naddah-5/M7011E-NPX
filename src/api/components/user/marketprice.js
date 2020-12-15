"use strict"

module.exports = class marketprice {
    constructor(regionName) {
        this.regionName = regionName;
        this.maxTotalProduction = 100;
        this.minTotalProduction = 0;
        this.currentTotalProduction = 0;
        this.electricityPrice = 0.5; // 50 öre/kWh
        this.maxTotalProduction = 0;
        this.currentPrice = 0;
    }

    setTotalProduction(newProduction){
        if (newProduction >= this.maxTotalProduction){
            this.currentTotalProduction = this.maxTotalProduction;
        }
        else if (newProduction < this.minTotalProduction){
            this.currentTotalProduction = this.minTotalProduction;
        }
        else {
            this.currentTotalProduction += newProduction;
        }
    }

    setMaxTotalProduction(newMaxTotalProduction) {
        this.maxTotalProduction = newMaxTotalProduction;
    }

    getRegionName() {
        return this.regionName;
    }

    getCurrentTotalProduction() {
        return this.currentTotalProduction;
    }

    getElectricityPrice() {
        return this.electricityPrice;
    }

    getCurrentPrice() {
        return this.currentPrice;
    }

    setCurrentPrice() {
        this.currentPrice = 0.1 * (this.currentTotalProduction / this.maxTotalProduction) * this.electricityPrice;
    }
}