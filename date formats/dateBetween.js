function getDatesBetween(startDatestr, endDatestr) {
  const dates = [];
  let currentDate = new Date(startDatestr);
  const endDate = new Date(endDatestr);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
const result = getDatesBetween("2025-05-20", "2025-05-30");

const format = result.map((each) => each.toISOString().split("T")[0]);
console.log(format);