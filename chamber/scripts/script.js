// Get the current date
var currentDate = new Date();

// Get the last visit date from localStorage
var lastVisitDate = localStorage.getItem('lastVisitDate');

if (!lastVisitDate) {
  // First visit
  localStorage.setItem('lastVisitDate', currentDate);
  displayMessage("Welcome! Let us know if you have any questions.");
} else {
  // Calculate the time difference in milliseconds
  var timeDiff = currentDate - new Date(lastVisitDate);

  // Convert the time difference to days
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    // Less than a day since the last visit
    displayMessage("Back so soon! Awesome!");
  } else {
    // More than a day since the last visit
    localStorage.setItem('lastVisitDate', currentDate);
    var message = "You last visited " + daysDiff + " " + (daysDiff === 1 ? "day" : "days") + " ago.";
    displayMessage(message);
  }
}

