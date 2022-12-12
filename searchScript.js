// ######### SEARCH ON 2+ PARAMETERS ####################

// TASK 3c

document.addEventListener('DOMContentLoaded', function() {
    
    var searchValue = sessionStorage.getItem("searchValue");
    searchValue = searchValue.replace(" ", "%20");

    var language = sessionStorage.getItem("language");
    var sortBy = sessionStorage.getItem("sortBy");

    
    
    // URL with which to fetch news
    newsURL = 'https://newsapi.org/v2/everything?' +
    'q='+ searchValue + '&' +
    'pageSize=8&' +
    'language=' + language + '&' +
    'sortBy=' + sortBy + '&' +
    'apiKey=cfdaace3822b4de588df6319336c65c2';

    console.log(newsURL);

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
            
            let table = document.getElementById("searchResults");

            // for each article in the news object
            // get the title and url
            for (let i = 0; i < 7; i++) {
                let row = table.insertRow();
                let cell = row.insertCell();
                let text = document.createTextNode(news.articles[i].title);
                cell.appendChild(text);
                cell = row.insertCell();
                text = document.createTextNode(news.articles[i].url);
                cell.appendChild(text);

                // add a button to the table
                cell = row.insertCell();
                let button = document.createElement("button");
                button.innerHTML = "Read";
                // set button class 
                button.setAttribute("class", "readButton");
                button.setAttribute("id", "goto-" + i);
                cell.appendChild(button);

                var buttons = document.getElementsByClassName("readButton");
                // for each button log the button id to the console when clicked
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener("click", function() {
                        console.log(buttons[i].id);
                
                        // from buttons[i].id get the article number
                        articleNumber = buttons[i].id.split('-')[1];
                        // store the article number in sessionStorage
                        sessionStorage.setItem("articleNumber", articleNumber);
                        // redirect user to article.html;
                        window.location.href = "article.html";

            })};
        }});
    });


// get the inputs from the advanced search form
var advancedSearchForm = document.getElementById("advancedSearch");
advancedSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log('advanced search form submitted');
    var language = document.getElementsByName("language").value;
    var sortBy = document.getElementsByName("sortBy").value;

    // store the searchValue, language and sortBy in sessionStorage
    sessionStorage.setItem("language", language);
    sessionStorage.setItem("sortBy", sortBy);


});


//####################### SEARCH BAR ############################

var searchBarForm = document.getElementById("searchBar");
// add event listener to searchBarForm on enter
searchBarForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // get search value from search bar
        var searchValue = document.getElementById("searchValue").value;
        // set search value in sessionStorage
        sessionStorage.setItem("searchValue", searchValue);

        // set default language to english
        var language = "en";
        // set language in sessionStorage
        sessionStorage.setItem("language", language);

        // set sortBY to publishedAt
        var sortBy = "publishedAt";
        // set sortBy in sessionStorage
       sessionStorage.setItem("sortBy", sortBy);


        // redirect to search.html
        window.location.href = "search.html";
});



    

