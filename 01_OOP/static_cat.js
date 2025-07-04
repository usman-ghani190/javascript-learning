class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log("THIS IS: ", this);
  }

  static species = "felis catus";
}

function choice(arr) {
  const randIdx = Math.floor(Math.random * arr.length);
  return arr(randIdx);
}

function registerStray() {
  const names = ["mufffin", "bicuit", "sleepy", "dodo"];
  const name = choice(names);
  return new Cat(name, "Unknown");
}
