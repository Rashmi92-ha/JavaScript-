const date = new Date();

// DD-MM-YYYY style (like in India)
console.log(date.toLocaleDateString("en-IN"));

// MM/DD/YYYY (US format)
console.log(date.toLocaleDateString("en-US"));

// YYYY-MM-DD (Canada format)   
console.log(date.toLocaleDateString("en-CA"));
