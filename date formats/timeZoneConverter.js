//Convert UTC String to local Time
const utcDate = new Date("2025-05-27T12:00:00Z");
console.log("local time:", utcDate.toString());

//Convert local time to utc
const localDate = new Date();
console.log("UTC Time:", localDate.toUTCString());

//Convert UTC to a Specific Time Zone (using Intl.DateTimeFormat)
const date = new Date("2025-05-27T12:00:00Z");
const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log("IST Time:", formatter.format(date));
