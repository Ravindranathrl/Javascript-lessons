let i = 0;

do {
    i++; // Increment i
    console.log(i); // Print i
    
    i += i; // Double i
    
    if (i > 1000) {
        console.log("Exceeded the limit");
        break; // Prevent infinite loop
    }

} while (i < 100){
    console.log("Do nothing")
    i=9
} // Corrected condition
