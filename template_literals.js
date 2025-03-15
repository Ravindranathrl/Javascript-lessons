// Template literals are a feature introduced in JavaScript with ES6 (ECMAScript 2015) that provide an improved way to work with strings. They allow you to create strings with embedded expressions, multi-line strings, and better readability compared to traditional string concatenation or the older string literal syntax. Template literals are enclosed by backticks (`) instead of single (') or double (") quotes.

// Key Features of Template Literals
// Embedded Expressions:
// You can embed expressions (e.g., variables, arithmetic, function calls) inside ${} within the template literal.
// This eliminates the need for string concatenation with the + operator.

// Multi-Line Strings:
// Template literals preserve line breaks and whitespace as they appear in the code, making it easier to write multi-line strings without using \n or concatenation.
// Tagged Templates:
// They can be used with a tag function to customize the string processing (more advanced use case).


const name = "Alice";
const age = 25;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Outputs: Hello, my name is Alice and I am 25 years old.

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Outputs: The sum of 5 and 10 is 15.



// multi-line-strings

// can can used with in the  `~that key in the keyboard`

const message = `This is a
multi-line
string.`;

console.log(message);
// Outputs:
// This is a
// multi-line
// string.


// 3. Using Functions or Complex Expressions

function getGreeting() {
    return "Hello";
}

const user = { name: "Bob", age: 30 };
console.log(`${getGreeting()}, ${user.name}! You are ${user.age > 18 ? "an adult" : "a minor"}.`);
// Outputs: Hello, Bob! You are an adult.
// Date Object


