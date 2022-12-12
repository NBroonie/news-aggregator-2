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








