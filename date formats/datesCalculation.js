//Add Days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
const today = new Date();
console.log(addDays(today, 5).toLocaleDateString());

//Subtract Days
function subtractDays(date, days) {
  const subResult = new Date(date);
  subResult.setDate(subResult.getDate() - days);  
  return subResult;
}
const pastDay = new Date();
console.log(subtractDays(pastDay, 12).toLocaleDateString());
