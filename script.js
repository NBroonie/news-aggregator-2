//####################### MAIN PAGE ############################

// Checks if user is logged in and redirects to home page if not

// get user from session storage
let user = sessionStorage.getItem("user");

// for pages that require login check if user is logged in
if ((user === null) && (window.location.href === "main.htm")) {
  window.location.href = "home.htm";
}

//####################### LOGOUT ############################

// TASK 1b
// Logout button clears session storage and redirects to home page

// get logout button
let logoutbutton = document.getElementById("logout-button");

// when button is clicked clear session storage
logoutbutton.addEventListener("click", function(){
    sessionStorage.clear();
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






