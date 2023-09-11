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

class Playlist {
  constructor(videos, duration) {
    this.videos = videos;
    this.duration = duration;
  }
  addVideo(video, duration) {
    this.videos.push(video);
    this.duration.push(duration);
  }
  totalDuration() {
    let sum = 0;
    let durArr;
    durArr = this.duration;
    durArr.forEach((item) => {
      sum += item;
    }, this);
    return `The duration of all movies is ${sum} minutes`;
  }
  averageDuration() {
    let sum = 0;
    let durArr;
    durArr = this.duration;
    durArr.forEach((item) => {
      sum += item;
    }, this);
    let average = sum / durArr.length;
    return `The average time of all movies is ${average} minutes`;
  }
}
const test = new Playlist(["Star Wars"], [180]);
console.log(test);

test.addVideo("Pokemon", 200);
console.log(test);

function contextDemonstrator(make, model, year, cost) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.cost = cost;
  this.fullMake = function () {
    console.log(this.make + " " + this.model);
  };
}

const newCar = {
  make: "Hondai",
  model: "Sonata",
};

let fullName = contextDemonstrator.fullMake.bind(newCar);
