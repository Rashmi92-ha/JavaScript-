function isWeekend(date) {
  const day = new Date(date).getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
}
const date = "2025-05-25";
if (isWeekend(date)) {
  console.log(`${date} is a weekend`);
} else {
  console.log(`${date} is not a weekend`);
}
