//display the  day of the week
const day = new Date();
const weekDay = day.toLocaleDateString('en-US', { weekday: 'long' });
console.log(weekDay);