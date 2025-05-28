//Create a countdown timer to a future date
function startCountDown(targetDateStr) {
  const targetDate = new Date(targetDateStr);
  const timer = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      console.log("⏰ CountDown Completed!");
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 24);
    const seconds = Math.floor((diff / 1000) % 60);

    console.log(`⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);
}

startCountDown("2026/01/01");
