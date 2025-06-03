function generateCalendar(year, month) {
  const days = [];
  const date = new Date(year, month - 1, 1);

  while (date.getMonth() === month - 1) {
    days.push({
      date: date.toDateString(),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    });

    date.setDate(date.getDate() + 1);
  }

  return days;
}
const calendar = generateCalendar(2025, 6);
console.log(calendar);
