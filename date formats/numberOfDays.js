const date1 = new Date("2025-09-05");
const date2 = new Date("2026-01-30");

const numOfDays = Math.abs(date2 - date1);
const milllisec = 1000 * 60 * 60 * 24;
const difference = Math.floor(numOfDays / milllisec);

console.log(difference);
