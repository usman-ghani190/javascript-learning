// Primitives:
// Immutable, simple values — stored by value

// | Type        | Example              |
// | ----------- | -------------------- |
// | `String`    | `"hello"`, `'world'` |
// | `Number`    | `42`, `3.14`         |
// | `Boolean`   | `true`, `false`      |
// | `Null`      | `null`               |
// | `Undefined` | `undefined`          |
// | `BigInt`    | `9007199254740991n`  |
// | `Symbol`    | `Symbol('id')`       |


// 1. String
// Represents a sequence of characters.

let name = 'Usman';
console.log(typeof name)


// 2. Number
// Represents both integer and floating-point numbers.

let age = 25;
let pi = 3.14;
console.log(typeof pi);


// 3. Boolean
// Represents a logical value: true or false.

let isLoggedIn = true;
console.log(typeof isLoggedIn);


// 4. 📄 Undefined
// A variable that has been declared but not assigned a value.

let score;
console.log(score);
console.log(typeof score);


// 5. 📄 Null
// Represents an intentional absence of any value or object.

let result = null;
console.log(result);
console.log(typeof result);


// 6. 📄 Symbol (ES6)
// Creates a unique identifier.

const id = Symbol("userID");
console.log(typeof id); // "symbol"


// 7. 📄 BigInt (ES11 / ES2020)
// For integers larger than 2^53 - 1.

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// What does the n mean at the end of a BigInt in JavaScript?
// ✅ n indicates that the value is a BigInt literal — not a regular number.


// Why it's needed:
// JavaScript numbers (type Number) are based on IEEE 754 double-precision and can safely represent integers only up to:

Number.MAX_SAFE_INTEGER === 9007199254740991;

// Beyond this, precision breaks:

console.log(9007199254740991 + 1); // 9007199254740992 ✅
console.log(9007199254740991 + 2); // 9007199254740992 ❌ (wrong!)

// BigInt to the rescue:
// To store larger integers accurately, use n at the end:

const big = 9007199254740993n; // ✅ BigInt
console.log(typeof big); // "bigint"

// Without n:
const tooBig = 9007199254740993; // regular number
console.log(tooBig); // inaccurate result

// Example: Arithmetic with BigInt
const a = 123456789012345678901234567890n;
const b = 1n;
console.log(a + b); // 123456789012345678901234567891n


// You Can’t Mix BigInt and Number
const x = 10n;
const y = 5;
// console.log(x + y); // ❌ TypeError: Cannot mix BigInt and other types (uncomment when testing it)

// ✅ You must convert:
console.log(x + BigInt(y)); // ✅ OK

// ✅ Summary:

// | `9007199254740991`  | Regular `Number` — max safe integer   |
// | ------------------- | ------------------------------------- |
// | `9007199254740991n` | BigInt — with `n`, can go much higher |
// | `n`                 | Literal marker for BigInt             |




// OBJECT TYPES:

// 1. 📄 Object
// A collection of key–value pairs.

let user = {
    name : 'Usman',
    age : 22,
}

console.log(typeof user)


// 2. 📄 Array:
// An ordered list of values (technically a type of object).

let colors = ['green', 'red', 'blue']

console.log(typeof colors)


// 3. 📄 Function:
// A block of reusable code. Also a type of object.

function greet(){
    return 'Hello!';
}

console.log(typeof greet)


// 4. 📄 Date:
// Represents date and time.

let now = new Date();
console.log(now); // current date and time
console.log(typeof now); // "object"


// 6. 📄 Map:
// A collection of keyed data items (like objects but keys can be any type).

let map = new Map();
map.set("name", "Usman");
console.log(map.get("name")); // "Usman"


// 7. 📄 Set:
// A collection of unique values.

let set = new Set([1, 2, 3, 2]);
console.log(set); // Set { 1, 2, 3 }


// ✅ Summary Table:

// | Type      | Example           | typeof result |
// | --------- | ----------------- | ------------- |
// | String    | `"hello"`         | `"string"`    |
// | Number    | `42`, `3.14`      | `"number"`    |
// | Boolean   | `true`            | `"boolean"`   |
// | Undefined | `let x;`          | `"undefined"` |
// | Null      | `let x = null;`   | `"object"`\*  |
// | Symbol    | `Symbol('id')`    | `"symbol"`    |
// | BigInt    | `1234567890n`     | `"bigint"`    |
// | Object    | `{ name: "Ali" }` | `"object"`    |
// | Array     | `[1, 2, 3]`       | `"object"`    |
// | Function  | `function() {}`   | `"function"`  |
// | Date      | `new Date()`      | `"object"`    |
