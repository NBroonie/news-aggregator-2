// #################### DISPLAY LATEST NEWS ####################

// TASK 3a

// here we display the latest news on the main.html page
// we use DOMContentLoaded to make sure that the content has been loaded and is ready to be changed
// we get the news data from NewsAPI, the everything endpoint is used to get the latest news
// to query the API we must include one of q, source, or domain in the query
// we use q to search for the word world cup, to demonstrate the API.
// we could have used the topHeadlines endpoint, but there is no way to sort by publishedAt and 
// therefore may not be the latest news.
// SEE main.html for the news section


// we want to wait until the DOM has loaded before we run our code
// this is because we want to make sure that the elements we want to change
// have been loaded into the DOM
document.addEventListener('DOMContentLoaded', function() {

// ############## Get news from NewsAPI ##############

// NEWSAPI KEY: cfdaace3822b4de588df6319336c65c2

// URL with which to fetch news
newsURL = 'https://newsapi.org/v2/everything?' +
            'q=world%20cup&' +
            'pageSize=8&' +
            'language=en&' +
            'sortBy=publishedAt&' +
            'apiKey=cfdaace3822b4de588df6319336c65c2';

// function to fetch news from the newsURL
// must use async as we have to wait for the response from the API
// async -> asynchronous
async function getNews() {
    //call the api and wait for the response
    const response = await fetch(newsURL);
    console.log(response);
    // convert the response to json
    var news = await response.json();
    console.log(news);
    // store news in sessionStorage
    sessionStorage.setItem('news', JSON.stringify(news));
    // return news after it has been fetched
    return news;

}

// call the getNews function to fetch the news data
getNews().then(news => {
    // for each article in the news object
    // replace the content of the article with the article title
    for (let i = 0; i < 7; i++) {
        // replace the content at article-i with the title of the article
        document.getElementById('article-' + i).innerHTML = news.articles[i].title;     
        
        // JSON key for the article image not available
    }});


// ############## Get weather from openweathermap ##############

// openweathermap API key: 136eabe87adb5229a446c9ac5c86625f

// URL with which to fetch weather
weatherURL = 'https://api.openweathermap.org/data/3.0/onecall?' +
            'lat=55.67&' +
            'lon=12.56&' +
            'units=metric&' +
            'appid=136eabe87adb5229a446c9ac5c86625f'

// function to fetch weather from the weatherURL
// must use async as we have to wait for the response from the API
async function getWeather() {
    //call the api and wait for the response
    const response = await fetch(weatherURL);
    console.log(response);
    // convert the response to json
    var weather = await response.json();
    console.log(weather);

    // return weather after it has been fetched
    return weather;
}

// call the getWeather function to fetch the weather data
getWeather().then(weather => {

    // TASK 4a
    // get time from weather
    timestamp = weather.current.dt;
    // get date from time
    date = new Date(timestamp*1000);

    // replace the content of the weather-time element with the date
    document.getElementById('weather-time').innerHTML = date;

    // TASK 4c
    // get temperature from weather
    temperature = weather.current.temp;

    temperature = temperature + '&#8451;';

    // replace the content of the weather-temp element with the temperature
    document.getElementById('weather-temp').innerHTML = temperature;

    // TASK 4d & 4e
    // get sunrise and sunset from weather


    sunrise = weather.current.sunrise;
  
    // get hh:mm:ss from sunrise
    sunrise = new Date(sunrise*1000);
    sunrise = sunrise.toTimeString().split(' ')[0]

    document.getElementById('weather-sunrise').innerHTML = sunrise;

    sunset = weather.current.sunset;
    // get hh:mm:ss from sunset
    sunset = new Date(sunset*1000);
    sunset = sunset.toTimeString().split(' ')[0]

    document.getElementById('weather-sunset').innerHTML = sunset;

    // TASK 4b
    // get 7 day forecast 4b
    forecast = weather.daily;


    // create a new array to store the 7 day forecast
    forecast7Day = [];

    // for each day in the forecast
    for (let i = 0; i < 7; i++) {

        // get the day
        day = forecast[i].dt;
        // get the date from the day
        day = new Date(day*1000);
        // get the day of the week from the date
        day = day.toDateString().split(' ')[0];
        // get the temperature
        temp = forecast[i].temp.day;
        // get the weather
        weather = forecast[i].weather[0].main;
        // get the weather icon code
        icon = forecast[i].weather[0].icon;
        iconurl = "http://openweathermap.org/img/wn//" + icon + "@2x.png";
        let image = document.createElement('img');
        image.src = iconurl;

        // create a new object to store the day, temperature and weather
        dayForecast = {
            day: day,
            temp: temp,
            weather: weather,
            icon: iconurl
        }
        // add the dayForecast object to the forecast7Day array
        forecast7Day.push(dayForecast);

    }

    // Citation: https://www.valentinog.com/blog/html-table/

      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            if (key == "icon") {
              let image = document.createElement('img');
              image.src = element[key];
                cell.appendChild(image);
            } else {

            let text = document.createTextNode(element[key]);
            cell.appendChild(text);}

          }
        }
      }

      
      let table0 = document.getElementById("weather-forecast");
//      let data = Object.keys(mountains[0]);
//      generateTableHead(table, data);
      generateTable(table0, forecast7Day);

    });

    // Citation end



var buttons = document.getElementsByTagName("button");
    // for each button log the button id to the console when clicked
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {

            // from buttons[i].id get the article number
            articleNumber = buttons[i].id.split('-')[1];
            // store the article number in sessionStorage
            sessionStorage.setItem("articleNumber", articleNumber);



            // redirect user to article.html;
            window.location.href = "article.html";
        });
    }


});

