document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  setInterval(updateTime, 1000);
  updateTime();
});
