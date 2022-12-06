//Get the form element by id
let signupForm = document.getElementById("signupForm");
//Add event listener to the form
signupForm.addEventListener("submit", function(event) {
  //Prevent the form from submitting
  event.preventDefault();
  //Get the email and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // alert with username and password
  alert("Username: " + username + " Password: " + password);

  // Create a new user object
  let user = {
    "username": username,
    "password": password
  };


// Requiring fs module in which 
// writeFile function is defined. 
const fs = require('fs') 
  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 

  fetch('./userData.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

});