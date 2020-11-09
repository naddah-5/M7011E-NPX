"use strict";

module.exports = class battery {
    constructor(owner, capacity, chargeRate){
        this.owner = owner;
        this.minCapacity = 0;
        this.capacity = capacity;
        this.charge = Math.floor(capacity/2);
        this.chargeRate = chargeRate; //roughly 200 kWh
    }
}