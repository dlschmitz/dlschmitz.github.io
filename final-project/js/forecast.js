const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.94583&units=imperial&appid=a67fcb3554a0fab8a1ab5d69e7765d71";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('current').innerHTML = jsObject.weather[0].main;
        document.getElementById('current-temp').innerHTML = jsObject.main.temp.toFixed(0) + '&#8457;';
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('speed').innerHTML = jsObject.wind.speed.toFixed(0) + '&nbsp;mph';

    });

/* fiveday */


const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.94583&units=imperial&appid=a67fcb3554a0fab8a1ab5d69e7765d71";
fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(f => f.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`temp${day+1}`).innerHTML = forecast.main.temp.toFixed(0) + '&#8457;';
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];

            let imagesrc = 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png';
            let imageAlt = forecast.weather[0].description;

            document.getElementById(`fiveDay${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`fiveDay${day + 1}`).setAttribute('alt', imageAlt);

            day++;

        });

    });