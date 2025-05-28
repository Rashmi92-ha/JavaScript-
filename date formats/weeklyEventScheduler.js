function getNextWeekdayTime(weekday, hour, minute) {
  const result = new Date();
  result.setHours(hour, minute, 0, 0);

  const currentDay = result.getDay();
  let daysToAdd = (weekday - currentDay + 7) % 7;
  if (daysToAdd === 0 && result < new Date()) {
    daysToAdd = 7;
  }
  result.setDate(result.getDate() + daysToAdd);
  return result;
}

const nextMonday = getNextWeekdayTime(1, 10, 0);
console.log("Next Event:", nextMonday.toString());
