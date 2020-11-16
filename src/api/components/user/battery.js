"use strict";

module.exports = class battery {
    constructor(owner, capacity){
        this.owner = owner;
        this.minCapacity = 0;
        this.capacity = capacity;
        this.charge = Math.floor(capacity/2);
        this.chargeRate = 200; //roughly 200 kWh
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
        this.minCapacity = newMinCapacity;
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
        this.charge = newCharge;
    }
    getChargeRate(){
        return this.chargeRate;
    }
    setChargeRate(newChargeRate){
        this.chargeRate = newChargeRate;
    }

}