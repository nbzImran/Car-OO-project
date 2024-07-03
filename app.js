class Vehicle {
    constructor(make, model, year) {
        this.a = make;
        this.b = model;
        this.c = year;
    }
    honk(){
        console.log('Beep')
    }
    toString(){
        console.log(`The vehicle is ${this.a} ${this.b} ${this.c}`)
    }
}

let myFirstVehicle0 = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle0.honk(); // "Beep."


let myFirstVehicle1 = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle1.toString(); // "The vehicle is a Honda Monster Truck from 1999."


class Car extends Vehicle {
    constructor(a,b,c) {
        super(a,b,c);
        this.numWheels = 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


class Motorcycle extends Vehicle{
    constructor(a,b,c) {
        super(a,b,c);
    }

    revEngine() {
        console.log("VROOOOOOM!");
        this.numWheels = 2;
    }

}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2



class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only wheels are allowed here!"
        }
        if(this.vehicles.length >= this.capacity){
            return 'Sorry we are out of the space, palese comeback later!'
        }
        this.vehicles.push(newVehicle);
        return "vehicle added to your grage!"
    }
}


let garage = new Garage(3);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
