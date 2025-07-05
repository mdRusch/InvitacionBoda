document.addEventListener("DOMContentLoaded", function () {
    const updateCountdown = () => {
      const targetDate = new Date("November 15, 2025 18:30:00").getTime();
      const now = new Date().getTime();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h4>¡Es el gran día!</h4>";
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    };
  
    setInterval(updateCountdown, 1000);
    updateCountdown();
  });
  