/* 1. for Loop
Used when you know how many times to loop.*/

for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
  }
  // Output: Count: 1 ... Count: 5


//   2. while Loop
// Used when the number of iterations is not fixed — runs while condition is true.

let j = 1;
while (j <= 5) {
  console.log("While Count:", j);
  i++;
}

// 3. do...while Loop
// Like while, but runs at least once, even if the condition is false.

let k = 6;
do {
  console.log("Do While Count:", k);
  k++;
} while (k <= 5); // condition false, but runs once


// 4. for...of Loop
// Used to iterate over iterables like arrays, strings, sets, etc.

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}


// for...in Loop
// Used to iterate over object keys (enumerable properties).


const person = {
  name: "Usman",
  age: 25,
  role: "developer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 6. .forEach() Method (Array-specific)
// Calls a function for each element in an array.

const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
  console.log(`Index ${index} has value ${num}`);
});


// 7. .map() Loop (Array-specific)
// Returns a new array after transforming each item.

const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]
