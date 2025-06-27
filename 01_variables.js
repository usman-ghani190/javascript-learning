// var – The Original Way (ES5 and earlier)

// Key Features:
// Function-scoped: Accessible anywhere inside the function it’s declared in.
// Hoisted: Declaration is moved to the top of the scope and initialized with undefined.
// Redeclarable: Can be redeclared in the same scope without errors.
// Can be reassigned.

// Example:

function example() {
  console.log(a); // undefined (due to hoisting)
  var a = 10;
  console.log(a); // 10
}
example();

// Drawbacks:
// Not block-scoped — leads to bugs.
// Can be redeclared — can accidentally overwrite variables.



// let – The Modern Way (Introduced in ES6)

// Key Features:
// Block-scoped: Only available within { ... } where it's declared.
// Hoisted: But not initialized — exists in temporal dead zone (TDZ).
// Cannot be redeclared in the same scope.
// Can be reassigned.

//  Example:

{
    let x = 5;
    x = 10; // ✅ reassignment allowed
    console.log(x); // 10
  }

//   console.log(x); // ❌ ReferenceError (Uncomment for testing purpose)


// Use When:

// You want to declare variables that may change.
// You need block-level scope, especially in loops and conditionals.


// const – Immutable Reference

// Key Features:
// Block-scoped
// Must be initialized at declaration
// Cannot be reassigned
// Cannot be redeclared

// Note:
// const makes the binding immutable, not the value itself.

// Example 1: Primitive values

const pi = 3.14;
// pi = 3.15; // ❌ Error: Assignment to constant variable (uncomment when testing)


//  Example 2: Objects (reference is constant, not content)
const user = { name: "Usman" };
user.name = "Ali"; // ✅ Allowed

// user = { name: "Ahmed" }; // ❌ Error: Can't reassign the object itself (uncomment when testing)


// Use When:
// You know the value won’t change
// You want to prevent accidental reassignment

// What is Temporal Dead Zone (TDZ)?
// Variables declared with let and const are hoisted but can’t be accessed until the execution reaches their declaration line.

// console.log(x); // ❌ ReferenceError (uncomment when running it.)
let x = 5;


