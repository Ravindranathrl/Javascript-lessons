// 1. Basic Manipulation Methods
// length (Property)
// Returns the length of the string (number of characters).


const str = "Hello";
console.log(str.length); // Outputs: 5

// it will change tit to the lowercase char
console.log(str.toLowerCase());

// It will change it to the uppercase char
console.log(str.toUpperCase());

//Trim 

//Basically what is does is if there any space left for this one it will removes or trim it 


str2 = " Hello world"

console.log(str2.trim())


// concat() - it is a string method what it does is it concats two strings 
// Combines two or more strings.

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // Outputs: "Hello World"

// Searching and Locating Methods
// Returns the first index where the searchValue is found, or -1 if not found. The optional start parameter specifies where to begin the search.

// code

const str3 = "Hello World";
console.log(str3.indexOf("World")); // Outputs: 6
console.log(str3.indexOf("x")); // Outputs: -1

// str 4

let str4 ="RAVIO"
console.log(str4)


// includes(searchValue, start)
// Checks if the string contains the searchValue and returns true or false. The optional start parameter specifies where to begin.


console.log(str.includes("World")); // Outputs: true
console.log(str.includes("x")); // Outputs: false

// startsWith(searchValue, start)
// Checks if the string starts with the searchValue and returns true or false.
// 

console.log(str.startsWith("Hello")); // Outputs: true

// endsWith(searchValue, length)

console.log(str.endsWith("World")); // Outputs: true

// slice(start, end)
// Extracts a section of the string and returns a new string. The end index is exclusive.

console.log(str.slice(0, 5)); // Outputs: "Hello"
console.log(str.slice(6)); // Outputs: "World"

// substring(start, end)
// Similar to slice, but it cannot accept negative indices and swaps start and end if start > end.
console.log(str.substring(0, 5)); // Outputs: "Hello"

// charAt(index)
// Returns the character at the specified index

console.log(str.charAt(1)); // Outputs: "e"


// additionally you can visit the developer.morzilla.org for additional notes 


