const arr = [1, 2, 3];
arr.customProperty = "Hello";
console.log(arr.customProperty); // Outputs: "Hello"
console.log(arr); // Outputs: [1, 2, 3, customProperty: "Hello"]
console.log(arr.length); // Outputs: 3 (length unaffected by custom properties)

// Sparse Arrays: Since arrays are objects, you can create sparse arrays (arrays with "holes") by assigning values to indices beyond the current length.

// const arr = [];
arr[5] = "last";
console.log(arr); // Outputs: [undefined, undefined, undefined, undefined, undefined, "last"]
console.log(arr.length); // Outputs: 6


// Here’s how arrays as objects behave in practice:

// const arr = [1, 2, 3];

// Add a custom property (object-like behavior)
arr.custom = "test";
console.log(arr.custom); // Outputs: "test"
console.log(arr); // Outputs: [1, 2, 3, custom: "test"]

// Use array methods
arr.push(4);
console.log(arr); // Outputs: [1, 2, 3, 4, custom: "test"]

// Check object properties
console.log(Object.keys(arr)); // Outputs: ["0", "1", "2", "3", "custom"]


// For Each Method 

console.log(arr);
arr.forEach(element => {
    console.log(element);
});

const names = "Ravindranath RL";
console.log(names)
const lowercasename = names.toLowerCase();
const splittedName = lowercasename.split(' ');
console.log(splittedName);       // Logs [ 'ravindranath', 'rl' ]
console.log(splittedName.join('-')); // Logs "ravindranath-rl"


// #Sorting arrays 

let employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 1. Sort by Name in Ascending Order (A-Z)
console.log("1. Ascending Order:");
employee.sort((a, b) => a.name.localeCompare(b.name));
console.log(employee);
// Output: [
//     { id: 4, name: 'Buwan' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' }
// ]

// Reset array to original state
employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 2. Sort by Name in Descending Order (Z-A)
console.log("\n2. Descending Order:");
employee.sort((a, b) => b.name.localeCompare(a.name));
console.log(employee);
// Output: [
//     { id: 3, name: 'Sudha' },
//     { id: 2, name: 'Steven' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 4, name: 'Buwan' }
// ]

// Reset array to original state
employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 3. Case-Insensitive Sorting (Ascending)
console.log("\n3. Case-Insensitive Ascending Order:");
employee.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
console.log(employee);
// Output: [
//     { id: 4, name: 'Buwan' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' }
// ]

// Reset array to original state
employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 4. Alternative: Manual Comparison (Ascending)
console.log("\n4. Manual Comparison Ascending Order:");
employee.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(employee);
// Output: [
//     { id: 4, name: 'Buwan' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' }
// ]

// Reset array to original state
employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 5. Preserving the Original Array
console.log("\n5. Preserving Original Array (Ascending):");
const sortedEmployees = [...employee].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted array:", sortedEmployees);
console.log("Original array:", employee);
// Output:
// Sorted array: [
//     { id: 4, name: 'Buwan' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' }
// ]
// Original array: [
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' },
//     { id: 4, name: 'Buwan' }
// ]

// Reset array to original state
employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// 6. Sorting with Additional Criteria (Name, then ID)
console.log("\n6. Sort by Name, then by ID:");
employee.sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name);
    if (nameComparison !== 0) return nameComparison;
    return a.id - b.id;
});
console.log(employee);
// Output: [
//     { id: 4, name: 'Buwan' },
//     { id: 1, name: 'Ravindranath' },
//     { id: 2, name: 'Steven' },
//     { id: 3, name: 'Sudha' }
// ]