const events = [
  { name: "Meeting", date: "2025-05-28" },
  { name: "Conference", date: "2025-05-25" },
  { name: "Webinar", date: "2025-05-27" },
];
// Sort in ascending order (earliest first)
events.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log(events);
//Sort in Descending Order (latest date first)
events.sort((a, b) => new Date(b.date) - new Date(a.date));
console.log(events);
