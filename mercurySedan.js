//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)



class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10
        this.scheduleService = false;
    }
    
    checkService(){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("enginge has started.");
            return this.started = true
        } else {
            console.log("no fuel, engine won't start");
            return this.started = false;
        }
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " doesn't have enough space for more passangers.")
            }
        } else {
            console.log(this.model + " " + this.make + " is full")
        }
    }
}


//TO DO: Creating Instances and Testing Them
let myCar = new Car('mercury', 'sedan', '2002', 'white', 50000)
myCar.start()
myCar.loadPassenger()
myCar.checkService()
console.log(myCar.start())
console.log(myCar.checkService())

