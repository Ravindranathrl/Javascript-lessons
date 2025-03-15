let employee = [
    { id: 1, name: 'Ravindranath' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Sudha' },
    { id: 4, name: 'Buwan' }
];

// Using every()
console.log("Using every():");
// Check if all names have length > 3
const allNamesLong = employee.every(emp => emp.name.length > 3);
console.log("All names have length > 3:", allNamesLong); // Outputs: true

// Check if all IDs are positive
const allIdsPositive = employee.every(emp => emp.id > 0);
console.log("All IDs are positive:", allIdsPositive); // Outputs: true

// Check if all names start with 'S'
const allNamesStartWithS = employee.every(emp => emp.name.startsWith('S'));
console.log("All names start with 'S':", allNamesStartWithS); // Outputs: false

// Using some()
console.log("\nUsing some():");
// Check if any name has length > 10
const someNameLong = employee.some(emp => emp.name.length > 10);
console.log("Some name has length > 10:", someNameLong); // Outputs: true

// Check if any ID is greater than 5
const someIdGreaterThan5 = employee.some(emp => emp.id > 5);
console.log("Some ID is greater than 5:", someIdGreaterThan5); // Outputs: false

// Check if any name starts with 'S'
const someNameStartsWithS = employee.some(emp => emp.name.startsWith('S'));
console.log("Some name starts with 'S':", someNameStartsWithS); // Outputs: true



const top = employee.filter(person => {
    if (person.name === "Sudha") {
      // Optional: console.log("this is the correct one");
      return employee;  // Keep this person
    }
    return false;   // Exclude others
  });


  console.log(top[0].name)

  const updatedemployee = employee.map(employee => ({ ...employee, lowercase: employee.name.toLowerCase(), uppercase:employee.name.toUpperCase()   }))

  console.log(updatedemployee)


