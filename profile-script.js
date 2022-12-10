// ####################### Change Username  ############################
// ####################### NOT FUNCTIONING ############################

//Get the element for the signup form
let changeUserForm = document.getElementById("changeUsername");

//Add event listener to the form to run js code when the submit button is pressed
changeUserForm.addEventListener("submit", function(event) {

  console.log("signup form submitted");

    //Prevent the form from submitting, allowing the below code to run
    event.preventDefault();
});

// ####################### NEXT TASK ############################