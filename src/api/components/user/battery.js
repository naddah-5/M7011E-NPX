"use strict";

module.exports = class battery {
    constructor(owner, capacity){
        this.owner = owner;
        this.minCapacity = 0;
        this.capacity = capacity;
        this.charge = 0;
        this.chargeRate = 1; //roughly 200 kWh
    }
    getOwner(){
        return this.owner;
    }
    setOwner(newOwner){
        this.owner = newOwner;
    }
    getMinCapacity(){
        return this.minCapacity;
    }
    setMinCapacity(newMinCapacity){
        if(newMinCapacity >= 0 && newMinCapacity < this.capacity) {
            this.minCapacity = newMinCapacity;
        }
        else if(newMinCapacity >= this.capacity && newMinCapacity > 0) {
            this.minCapacity = this.capacity - 1;
        }
        else if(newMinCapacity < 0) {
            this.minCapacity = 0;
        }
    }
    getCapacity(){
        return this.capacity;
    }
    setCapacity(newCapacity){
        this.capacity = newCapacity;
    }
    getCharge(){
        return this.charge;
    }
    setCharge(newCharge){
        if(this.capacity >= newCharge) {
            this.charge = newCharge;
        }
        else if(this.capacity <= newCharge) {
            this.charge = this.capacity;
        }
        else {
            this.charge = this.minCapacity;
        }
    }
    getChargeRate(){
        return this.chargeRate;
    }
    setChargeRate(newChargeRate){
        this.chargeRate = newChargeRate;
    }

}