import { isLeapYear } from "date-fns";
import { DateTime } from "luxon";

//Using the Date constructor
function leapYear1(year) {
  return new Date(year, 2, 0).getDate() === 29;
}
console.log(leapYear1(2023));
console.log(leapYear1(2024));

//Trying to construct Feb directly
function leapYear(year) {
  const leap = new Date(year, 1, 29);
  return leap.getDate() === 1;
}

console.log(leapYear(2000));
console.log(leapYear(2003));

//Using a utility library
console.log(isLeapYear(new Date(2025, 0, 1)));
console.log(DateTime.local(2024).isInLeapYear);
