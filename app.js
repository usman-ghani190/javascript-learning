console.log("HEllo");

let o1 = new Object();
o1[1] = "hello";
o1["1"] = "goodbye!";

console.log(o1[1]);

o1.sayHi = function sayHi() {
  return "Hi";
};

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`You deposited $${amt} the new balance is $${this.balance}`);
    } else {
      console.log("You can't deposit a negative amount.");
    }
  }

  withdraw(amt) {
    if (amt > this.balance) {
      console.log("You can't withdraw that much!");
    } else {
      this.balance -= amt;
      console.log(`You withdrew $${amt}. New balance is $${this.balance}`);
    }
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log("THIS IS: ", this);
  }

  static species = "felis catus";

  static registerStray() {
    const names = ["mufffin", "bicuit", "sleepy", "dodo"];
    const name = choice(names);
    return new Cat(name, "Unknown");
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
//  Ebook Excercise:

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, filesize) {
    super(title, author, year);
    this.filesize = filesize;
  }

  download() {
    console.log(`Title: ${this.title} and Filesize : ${this.filesize}`);
  }
}


// ArrayUtils Excercise:

class ArrayUtils {
    constructor() {
        throw new Error("Array cannot be instantiated!");
    }

    static average(arr) {
        if (arr.length === 0) throw new Error("Array cannot  be empty");
        return arr.reduce((sum, num) => sum + num, 0) / arr.length;
    }

    static max(arr) {
        return Math.max(...arr);
    }
}

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }
}