let fruits = ["apple", "banana", "orange"];
console.log(fruits); // Outputs: ["apple", "banana", "orange"]
removedfruits = fruits.splice(0,2)
console.log(`removed fruits are: ${removedfruits}`)
console.log(`fruits after its removed: ${fruits}`)

fruits.splice(2, -2, "lemon", "lime"); // Add at index 2, remove 0 elements
console.log(fruits); // Outputs: ["cherry", "plum", "lemon", "lime", "pear", "apple", "banana", "orange", "grape", "mango", "kiwi"]



const l = fruits.lastIndexOf("oranges")
if (l === -1){
    console.log("element not found in the array")
} else {
    console.log(fruits[l])
}


const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 2, name: "Phone", price: 500 } // Duplicate by value
];

const productToFind = { id: 2, name: "Phone", price: 500 };

// Find first match
const firstMatch = products.find(product => product.id === productToFind.id && product.name === productToFind.name && product.price === productToFind.price);
console.log("First match:", firstMatch); // Outputs: { id: 2, name: "Phone", price: 500 }

// Find index of first match
const firstIndex = products.findIndex(product => product.id === productToFind.id && product.name === productToFind.name && product.price === productToFind.price);
console.log("First index:", firstIndex); // Outputs: 1

// Find last match
const lastMatch = products.findLast(product => product.id === productToFind.id && product.name === productToFind.name && product.price === productToFind.price);
console.log("Last match:", lastMatch); // Outputs: { id: 2, name: "Phone", price: 500 }

// Find all matches
const allMatches = products.filter(product => product.id === productToFind.id && product.name === productToFind.name && product.price === productToFind.price);
console.log("All matches:", allMatches); // Outputs: [{ id: 2, name: "Phone", price: 500 }, { id: 2, name: "Phone", price: 500 }]