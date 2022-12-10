


// we want to wait until the DOM has loaded before we run our code
// this is because we want to make sure that the elements we want to change
// have been loaded into the DOM
document.addEventListener('DOMContentLoaded', function() {

// ############## Get news from NewsAPI ##############

// NEWSAPI KEY: cfdaace3822b4de588df6319336c65c2


// URL with which to fetch news
newsURL = 'https://newsapi.org/v2/everything?' +
            'sources=bbc-news&' +
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
        // TODO - find a way to get the image or replace with a default image

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

    // replace the content of the weather-temp element with the temperature
    document.getElementById('weather-temp').innerHTML = temperature;

    // TASK 4d
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

    //

});



});







