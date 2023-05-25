document.addEventListener('DOMContentLoaded', function() {
    var sidebarContent = document.querySelector('.sidebar p');
  
    // Get the current date
    var currentDate = new Date();
    var currentDateString = currentDate.toDateString();
  
    // Get the last visit date from localStorage
    var lastVisitDateString = localStorage.getItem('lastVisitDate');
  
    if (!lastVisitDateString) {
      // First visit
      sidebarContent.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      // Calculate the days between visits
      var lastVisitDate = new Date(lastVisitDateString);
      var timeDiff = Math.abs(currentDate - lastVisitDate);
      var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
      if (daysDiff === 1) {
        sidebarContent.textContent = 'Back so soon! Awesome!';
      } else {
        sidebarContent.textContent = 'You last visited ' + daysDiff + ' day' + (daysDiff === 1 ? '' : 's') + ' ago.';
      }
    }
  
    // Store the current visit date in localStorage
    localStorage.setItem('lastVisitDate', currentDateString);
  });
  