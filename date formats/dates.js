//Dates Basics
const date = new Date();
console.log(date);

//from a date string
const date1 = new Date("2025-04-26");
console.log(date1);

// From year, month, day, hour, minute, second
const newDate = new Date(2025, 3, 26, 10, 30, 0); // month is based on 0
console.log(newDate);

//JavaScript Date Formats
//Default to string
const todayDate = new Date();
console.log(todayDate.toString());

//ISO Format
console.log(todayDate.toISOString());

//Using Custom format (manual way)
const d = new Date();
const day = d.getDate();
const month = d.toLocaleString("Default", { month: "short" });
const year = d.getFullYear();
const fullDate = `${day}-${month}-${year}`;
console.log(fullDate);

//get method
const d1 = new Date("2025-04-26T09:29:44.29");
console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getDate());
console.log(d1.getDay());

//set Method
const d2 = new Date();
d2.setFullYear(2027);
d2.setMonth(5);
d2.setDate(3);
console.log(d2.toDateString());
