console.log('script loaded');

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