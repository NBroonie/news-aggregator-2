//####################### SIGNUP FORM ############################

//Get the form element by id
let signupForm = document.getElementById("signupForm");

//Add event listener to the form
signupForm.addEventListener("submit", function(event) {
  //Prevent the form from submitting
  event.preventDefault();

  //Get the email and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Create a new user object
  let user = {
    "username": username,
    "password": password
  };

  filename = user.username + "user";

  //check if file exists in localstorage
  if (localStorage.getItem(filename) !== null) {
    alert("Username already exists");
    return;
  }
  else {
    // send user object to localsotrage
    localStorage.setItem(filename, JSON.stringify(user));
    alert("User created");
  }
  
});

//####################### LOGIN FORM ############################

//Get the form element by id
let loginForm = document.getElementById("loginForm");

//Add event listener to the form
loginForm.addEventListener("submit", function(event) {
  //Prevent the form from submitting
  event.preventDefault();

  //Get the email and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username);
  console.log(password);

  // Create a new user object
  let user = {
    "username": username,
    "password": password
  };


  filename = user.username + "user";

  console.log(filename);

  //check if file exists in localstorage
  if (localStorage.getItem(filename) !== null) {
    // get user object from localstorage
    let user2 = JSON.parse(localStorage.getItem(filename));

    console.log(user2.password);
    console.log(user.password);

    if (user2.password === user.password) {
      alert("User logged in");
      // store user in session storage
      sessionStorage.setItem("user", user.username);

      // redirect to main page
      window.location.href = "main.htm";
    }
    else {
      alert("Wrong password");
    }
  }
  else {

    alert("User does not exist");
  }

}); 

//####################### MAIN PAGE ############################

// get user from session storage
let user = sessionStorage.getItem("user");

// for pages that require login check if user is logged in
if ((user === null) && (window.location.href === "main.htm")) {
  window.location.href = "home.htm";
}

//####################### LOGOUT ############################

//Get the form element by id
let logout = document.getElementById("logout");

//Add event listener to the form
logout.addEventListener("click", function(event) {
  //Prevent the form from submitting
  event.preventDefault();

  // remove user from session storage
  sessionStorage.removeItem("user");

  // redirect to home page
  window.location.href = "home.htm";
});





