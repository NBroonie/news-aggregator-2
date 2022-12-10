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


    //load website content from article.url
    var articleURL = article.url;

    console.log(articleURL);

    fetch(articleURL, {mode: "no-cors"}).then((resp) => resp.text()).then(data => {
        // Initialize the document parser
        const parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/xml');

        console.log(doc)



});

});

