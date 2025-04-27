function calculateAge(birthdayDateString) {
  const todayDate = new Date();
  const birthdayDate = new Date(birthdayDateString);
  let age = todayDate.getFullYear() - birthdayDate.getFullYear();
  const month = todayDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && todayDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
console.log(calculateAge("2001-01-30"));
