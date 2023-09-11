class User {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
}

const hanSolo = new User("Han Solo", 100, 50, ["Blaster"]);
console.log(hanSolo);

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
