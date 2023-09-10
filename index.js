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
