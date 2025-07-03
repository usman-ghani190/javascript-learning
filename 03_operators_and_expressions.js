// "What Are Operators?"
// Operators perform actions on values (called operands).
// Think of them as tools that let you assign, compare, combine, and modify values.

// 1. Arithmetic Operators:
// Used for basic math operations.

// | Operator | Meaning        | Example        | Result      |
// | -------- | -------------- | -------------- | ----------- |
// | `+`      | Addition       | `5 + 3`        | `8`         |
// | `-`      | Subtraction    | `5 - 2`        | `3`         |
// | `*`      | Multiplication | `4 * 2`        | `8`         |
// | `/`      | Division       | `10 / 2`       | `5`         |
// | `%`      | Modulus        | `10 % 3`       | `1`         |
// | `**`     | Exponentiation | `2 ** 3`       | `8`         |
// | `++`     | Increment      | `x++` or `++x` | adds 1      |
// | `--`     | Decrement      | `x--` or `--x` | subtracts 1 |

// 2. Assignment Operators:
// Used to assign values to variables.

// | Operator | Meaning             | Example                |
// | -------- | ------------------- | ---------------------- |
// | `=`      | Assignment          | `x = 5`                |
// | `+=`     | Add and assign      | `x += 2` → `x = x + 2` |
// | `-=`     | Subtract and assign | `x -= 2`               |
// | `*=`     | Multiply and assign | `x *= 3`               |
// | `/=`     | Divide and assign   | `x /= 2`               |
// | `%=`     | Modulus and assign  | `x %= 3`               |

// 3. Comparison Operators:
// Return true or false. Used in conditionals.

// | Operator | Meaning                      | Example     | Result  |
// | -------- | ---------------------------- | ----------- | ------- |
// | `==`     | Equal (loose)                | `5 == "5"`  | `true`  |
// | `===`    | Equal (strict, type matters) | `5 === "5"` | `false` |
// | `!=`     | Not equal                    | `5 != "5"`  | `false` |
// | `!==`    | Not equal (strict)           | `5 !== "5"` | `true`  |
// | `>`      | Greater than                 | `7 > 5`     | `true`  |
// | `<`      | Less than                    | `5 < 3`     | `false` |
// | `>=`     | Greater than or equal to     | `5 >= 5`    | `true`  |
// | `<=`     | Less than or equal to        | `4 <= 3`    | `false` |

// 4. Logical Operators:
// Used to combine multiple conditions.

// | Operator | Meaning     | Example         | Result     |            |         |        |
// | -------- | ----------- | --------------- | ---------- | ---------- | ------- | ------ |
// | `&&`     | Logical AND | `true && false` | `false`    |            |         |        |
// | ||       |             | true or false                | Logical OR |         |        |
// | `!`      | Logical NOT | `!true`         | `false`    |            |         |        |

// 5. String Concatenation:
// Joining strings together.

let first = "Usman";
let last = "Ghani";
let fullName = first + " " + last; // "Usman Ghani"
console.log(fullName);

// 6. Ternary Operator:
// A short way to write if...else.

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// 7. Type Operators:

// | Operator     | Meaning                     | Example                 |
// | ------------ | --------------------------- | ----------------------- |
// | `typeof`     | Returns the type of a value | `typeof 5` → `"number"` |
// | `instanceof` | Checks object type          | `arr instanceof Array`  |

// 8. Bitwise Operators (Advanced):

// | Operator | Meaning     | Example  |     |     |
// | -------- | ----------- | -------- | --- | --- |
// | `&`      | AND         | `5 & 1`  |     |     |
// | ||       | ||          | OR       |     |     |
// | `^`      | XOR         | `5 ^ 1`  |     |     |
// | `~`      | NOT         | `~5`     |     |     |
// | `<<`     | Left shift  | `5 << 1` |     |     |
// | `>>`     | Right shift | `5 >> 1` |     |     |

// 9. Expressions:

// An expression is any valid piece of code that resolves to a value.

// Examples of expressions:

5 + 3; // evaluates to 8
"x" + "y"; // evaluates to "xy"
a > b && c !== d; // boolean expression

// ✅ Summary Chart:

// | Category   | Examples                      |                           |         |
// | ---------- | ----------------------------- | ------------------------- | ------- |
// | Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |                           |         |
// | Assignment | `=`, `+=`, `-=`, etc.         |                           |         |
// | Comparison | `==`, `===`, `!=`, `<`, `>`   |                           |         |
// | Logical    | `&&`, \`                      |                           | `, `!\` |
// | String     | `+` (for concat)              |                           |         |
// | Ternary    | `condition ? true : false`    |                           |         |
// | Type       | `typeof`, `instanceof`        |                           |         |
// | Bitwise    | `&`, \`                       | `, `^`, `\~`, `<<`, `>>\` |         |
