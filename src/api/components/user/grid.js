"use strict"

module.exports = class grid {
    constructor(region, capacity) {
        this.region = region;
        this.capacity = capacity;
        this.charge = 0;
    }
    setCapacity(newCapacity) {
        this.capacity = newCapacity;
    }
    setCharge(newCharge) {
        this.charge = newCharge;
    }
    // WARNING: This function does not prevent you from drawing more power from the grid than it has
    // it only prevents the grid from containing "negative" charge!
    reduceCharge(chargeAmount) {
        if(this.charge >= chargeAmount) {
            this.charge -= chargeAmount;
        }
        else if(this.charge < chargeAmount) {
            this.charge = 0;
        }
    }
    // WARNING: This function does not prevent you from inserting more power to the grid than it can
    // contain, it only prevents the grid from being overloaded!
    increaseCharge(chargeAmount) {
        if(this.capacity < this.charge + chargeAmount) {
            this.charge = this.capacity;
        }
        else if(this.capacity > this.charge + chargeAmount) {
            this.charge += chargeAmount;
        }
    }
}