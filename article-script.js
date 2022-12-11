

// domcontentloaded
document.addEventListener("DOMContentLoaded", function() {

    // load articleNumber from sessionStorage
    var articleNumber = sessionStorage.getItem("articleNumber");

    console.log(articleNumber);

    // load news from sessionStorage
    var news = JSON.parse(sessionStorage.getItem("news"));


    // news.articles[articleNumber] as string
    var article = news.articles[articleNumber];



        console.log(article);
        // get the article title
        var title = article.title;
        document.getElementById("article-title").innerHTML = title;

        // get the article url
        var url = article.url;
        document.getElementById("article-link").innerHTML = url;

        document.getElementById("article-link").href = url;


// ####################### STORE READ ARTICLES ############################

// TASK 2f
// we will count articles opened on article.html as read articles
// as we have already stored the articleNumber in sessionStorage
// and used it to select the article from the news object
// we check that the article has not already been added to the users read-article array
// if it has not been added we push the article to the users read-article array
// there is no requirement to display the users read articles
// however the articles are stored in the users object in local storage
// and could be displayed if required


        // get the userObject from localStorage
        var userObject = JSON.parse(localStorage.getItem(sessionStorage.getItem("user") + "user"));

        // return read-article array from userObject
        var readArticle = userObject["read-article"];

        // get string of article
        var articleString = JSON.stringify(article);


        //check if articleString is in readArticle array
        if (readArticle.includes(articleString)) {
                console.log("article read");
        }
        else {
                console.log("article not read");
                // add articleString to readArticle array
                readArticle.push(articleString);
                // update readArticle array in userObject
                userObject["read-article"] = readArticle;
                // update userObject in localStorage
                localStorage.setItem(sessionStorage.getItem("user") + "user", JSON.stringify(userObject));
        }




});

// ####################### ADD TO FAVOURITES ############################

// TASK 2e
// on submission of the favouriteArticle form
// we check whether the article has already been added to the users favourites
// if it has not been added we push the article to the users favourites array
// we know which article to pushed by the articleNumber stored in sessionStorage
// SEE article.html for favouriteArticle form

// note that there is no requirement to display the users favourites
// however the articles are stored in the users object in local storage
// and could be displayed if required similar to how we will display
// the search results for task 3c.



var favouriteArticleForm = document.getElementById("favouriteArticle");
favouriteArticleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        console.log('submitted')
        // get the userObject from localStorage
        var userObject = JSON.parse(localStorage.getItem(sessionStorage.getItem("user") + "user"));
        
        // return fav-article array from userObject
        var favArticle = userObject["fav-article"];
        
        // get the articleNumber from sessionStorage
        var articleNumber = sessionStorage.getItem("articleNumber");
        
        // load news from sessionStorage
        var news = JSON.parse(sessionStorage.getItem("news"));
        
        // news.articles[articleNumber] as string
        var article = news.articles[articleNumber];
        
        // get string of article
        var articleString = JSON.stringify(article);
        
        //check if articleString is in favArticle array
        if (favArticle.includes(articleString)) {
                console.log("article already favourited");
        }
        else {
                console.log("article favourited");
                // add articleString to favArticle array
                favArticle.push(articleString);
                // update favArticle array in userObject
                userObject["fav-article"] = favArticle;
                // update userObject in localStorage
                localStorage.setItem(sessionStorage.getItem("user") + "user", JSON.stringify(userObject));
        }

});