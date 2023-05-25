const requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.0352&lon=-111.9386&units=imperial&exclude=minutely,hourly,daily&appid=edd40baf43f2b3f80219cb8af5bd05d9';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    let conditions = jsonObject['current'];
    let first = document.createElement('p');
    let second = document.createElement('p');
    let third = document.createElement('p');

    first.textContent = conditions.temp + '° F';
    second.textContent = 'Humidity: ' + conditions.humidity + '%';
    third.textContent = conditions.weather[0].description.charAt(0).toUpperCase() + conditions.weather[0].description.slice(1);

    document.querySelector('p.currents').appendChild(first);
    document.querySelector('p.currents').appendChild(second);
    document.querySelector('p.currents').appendChild(third);

    let alerts = {};
    let event = '';
    let description = '';
    var closebtn = document.getElementById("close");

    if (jsonObject.alerts != undefined) {
      alerts = jsonObject.alerts[0];
      event = alerts.event;
      description = alerts.description;
      closebtn.style.display = 'block';
    }

    if (event) {
      let alertElem = document.createElement('li');
      let alertEventElem = document.createElement('p');
      let alertDescriptionElem = document.createElement('p');

      alertElem.textContent = event;
      alertDescriptionElem.textContent = description;

      alertElem.appendChild(alertEventElem);
      alertElem.appendChild(alertDescriptionElem);

      document.querySelector('.alerts-list').appendChild(alertElem);
    }

    closebtn.addEventListener("click", function () {
      this.parentElement.style.display = 'none';
    });
  });