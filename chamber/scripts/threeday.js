const getURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.04&lon=111.94&units=imperial&exclude=minutely,hourly&appid=edd40baf43f2b3f80219cb8af5bd05d9';

fetch(getURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    let forecast = jsonObject['daily'];

    let today = new Date();
    
    let weekday = today.getUTCDay();
   
    let day;

    if (weekday == 0) {
      day = 'Sunday';
    } else if (weekday == 1) {
      day = 'Monday';
    } else if (weekday == 2) {
      day = 'Tuesday';
    } else if (weekday == 3) {
      day = 'Wednesday';
    } else if (weekday == 4) {
      day = 'Thursday';
    } else if (weekday == 5) {
      day = 'Friday';
    } else {
      day = 'Saturday';
    }

    let tomorrow = weekday + 1;
    let day2;

    if (tomorrow == 0) {
      day2 = 'Sunday';
    } else if (tomorrow == 1) {
      day2 = 'Monday';
    } else if (tomorrow == 2) {
      day2 = 'Tuesday';
    } else if (tomorrow == 3) {
      day2 = 'Wednesday';
    } else if (tomorrow == 4) {
      day2 = 'Thursday';
    } else if (tomorrow == 5) {
      day2 = 'Friday';
    } else {
      day2 = 'Saturday';
    }

    let pasado = weekday + 2;
    let day3;

    if (pasado == 0) {
      day3 = 'Sunday';
    } else if (pasado == 1) {
      day3 = 'Monday';
    } else if (pasado == 2) {
      day3 = 'Tuesday';
    } else if (pasado == 3) {
      day3 = 'Wednesday';
    } else if (pasado == 4) {
      day3 = 'Thursday';
    } else if (pasado == 5) {
      day3 = 'Friday';
    } else {
      day3 = 'Saturday';
    }


    let e = document.createElement('p');
    e.textContent = day + ': ' + forecast[0].temp.day + '° F';


    let f = document.createElement('p');
    f.textContent = day2 + ': ' + forecast[1].temp.day + '° F';

    let g = document.createElement('p');
    g.textContent = day3 + ': ' + forecast[2].temp.day + '° F';


    document.querySelector('div.daily').appendChild(e);
    document.querySelector('div.daily').appendChild(f);
    document.querySelector('div.daily').appendChild(g);

  });