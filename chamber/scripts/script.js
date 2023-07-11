// JavaScript file (script.js)

document.addEventListener("DOMContentLoaded", function() {
  // Check if localStorage is supported by the browser
  if (typeof(Storage) !== "undefined") {
    // Check if the user has visited before
    if (localStorage.getItem("lastVisit")) {
      const lastVisitTimestamp = localStorage.getItem("lastVisit");
      const currentTimeStamp = new Date().getTime();
      const oneDayInMillis = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

      // Calculate the number of days between visits
      const daysSinceLastVisit = Math.floor((currentTimeStamp - lastVisitTimestamp) / oneDayInMillis);

      // Display the appropriate message based on the number of days
      if (daysSinceLastVisit === 0) {
        document.getElementById("sidebar-content").textContent = "Back so soon! Awesome!";
      } else {
        const message = daysSinceLastVisit === 1 ? "day" : "days";
        document.getElementById("sidebar-content").textContent = "You last visited " + daysSinceLastVisit + " " + message + " ago.";
      }
    } else {
      // First visit
      document.getElementById("sidebar-content").textContent = "Welcome! Let us know if you have any questions.";
    }

    // Store the current visit timestamp in localStorage
    localStorage.setItem("lastVisit", new Date().getTime());

    
  }
});

