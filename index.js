class Car {
  constructor(make, model, year, cost) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.cost = cost;
  }
  list() {
    console.log(
      `You own a ${this.make} ${this.model} from the year ${this.year} and it cost ${this.cost} dollars`
    );
  }
}

const carOne = new Car("Nissan", "Ultima", 2013, ["10,000"]);
console.log(carOne);

const userTest = {
  firstName: "Matt",
  lastName: "Tucker",
  fullname: function () {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },
};
userTest.fullname();

const userTest2 = {
  firstName: "Matt",
  lastName: "Tucker",
  fullname: () => {
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
  },
};
//Arrow function grabs nearest function for this, so it grabs the global window
userTest2.fullname();

function AnotherCar(make, model, year, cost) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.cost = cost;
}

// “Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

// “A prototype is a working object instance. Objects inherit directly from other objects.”
