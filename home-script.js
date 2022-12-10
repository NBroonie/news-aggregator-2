//####################### SIGNUP FORM ############################
// TASK 2a
// Users are stored to local storage in the browser
// Each user is stored in a file with the username as the filename
// The file contains the user object in JSON format

//Get the element for the signup form
let signupForm = document.getElementById("signupForm");

//Add event listener to the form to run js code when the submit button is pressed
signupForm.addEventListener("submit", function(event) {

  console.log("signup form submitted");

  //Prevent the form from submitting, allowing the below code to run
  event.preventDefault();

  //Get the email and password from the form
  let username = document.getElementById("new-username").value;
  let password = document.getElementById("new-password").value;

  // Create a new user object
  let user = {
    "username": username,
    "password": password
  };

  // create a filename for the user
  filename = user.username + "user";

  //check if file exists in localstorage
  if (localStorage.getItem(filename) !== null) {
    // if file exists alert user
    alert("Username already exists");
    return;
  }
  else {
    // if file does not exist create new user
    // send user object to localsotrage
    localStorage.setItem(filename, JSON.stringify(user));
    // alert user
    alert("User created");
  }
  
});

//####################### LOGIN FORM ############################ 
// TASK 1a

// Once logged in the user is stored in session storage for use on other pages

//Get the form element by id
let loginForm = document.getElementById("loginForm");

//Add event listener to the form
loginForm.addEventListener("submit", function(event) {
  //Prevent the form from submitting, allowing the below code to run

  console.log("login form submitted");

  event.preventDefault();

  //Get the email and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Create a new user object
  let user = {
    "username": username,
    "password": password
  };

  // create a filename for the user
  filename = user.username + "user";

  //check if file exists in localstorage
  if (localStorage.getItem(filename) !== null) {

    // get user object from localstorage
    let storeduser = JSON.parse(localStorage.getItem(filename));

    // check if password is correct
    if (storeduser.password === user.password) {
      // if password is correct alert user
      alert("User logged in");

      // store user in session storage for use on other pages
      sessionStorage.setItem("user", user.username);

      // redirect to main page
      window.location.href = "main.html";
    }

    else {
      // if password is incorrect alert user
      alert("Wrong password");
    }
  }
  else {
    // if user file does not exist alert user
    alert("User does not exist");
  }

}); 