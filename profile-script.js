// ####################### Change Username  ############################

// on changeUsername form submit
// alert the user with the new username

var changeUsernameForm = document.getElementById("changeUsername");
changeUsernameForm.addEventListener("submit", function(event) {
    // prevent the form from submitting if the user has not entered a new username
    event.preventDefault();

    // get the new username from the form
    var newUsername = document.getElementById("newUsername").value;

    // create a key for the new username
    var newUserKey = newUsername + "user";

    // get the current username from sessionStorage
    var currentUsername = sessionStorage.getItem("user");

    // create a key for the current username
    var currentUserKey = currentUsername + "user"

    // if the new username is not the same as the current username
    if (newUsername !== currentUsername) {

        // get the userObject from localStorage with the current username as the key
        var userObject = JSON.parse(localStorage.getItem(currentUserKey));

        // update the username in the userObject
        userObject.username = newUsername;

        // store userObject in localStorage with the new username as the key
        localStorage.setItem(newUserKey, JSON.stringify(userObject));

        // remove the userObject from localStorage with the current username as the key
        localStorage.removeItem(currentUserKey);

        // update the username in sessionStorage
        sessionStorage.setItem("user", newUsername);



        // alert the user with the new username
        alert("Username has been changed to " + newUsername);
    } else {
        // alert the user that the new username is the same as the current username
        alert("Username is already " + newUsername);
    }


});


// ####################### FAVOURITE CATEGORIES ############################

// on favouriteCategories form submit

var favouriteCategoriesForm = document.getElementById("favouriteCategories");
favouriteCategoriesForm.addEventListener("submit", function(event) {
    // prevent the form from submitting if the user has not entered a new favourite category
    event.preventDefault();

    var checkboxes = document.getElementsByName("category");

    // from checkboxes get the checked categories
    var checkedCategories = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCategories.push(checkboxes[i].value);
        }
    }

    console.log(checkedCategories);

    // get the current username from sessionStorage
    var currentUsername = sessionStorage.getItem("user");

    // create a key for the current username
    var currentUserKey = currentUsername + "user"

    // get the userObject from localStorage with the current username as the key
    var userObject = JSON.parse(localStorage.getItem(currentUserKey));

    // update the favourite categories in the userObject
    userObject["fav-cat"] = checkedCategories;

    // store userObject in localStorage with the current username as the key
    localStorage.setItem(currentUserKey, JSON.stringify(userObject));

    // alert the user with the new favourite categories
    alert("Your favourite categories are " + checkedCategories);




  });

// ####################### DELETE ACCOUNT ############################

var deleteAccountForm = document.getElementById("deleteUser");
deleteAccountForm.addEventListener("submit", function(event) {
    
    // get the current username from sessionStorage
    var currentUsername = sessionStorage.getItem("user");

    // create a key for the current username
    var currentUserKey = currentUsername + "user"

    // remove the userObject from localStorage with the current username as the key
    localStorage.removeItem(currentUserKey);

    // remove the username from sessionStorage
    sessionStorage.removeItem("user");

    // alert the user that the account has been deleted
    alert("Your account has been deleted");

    // redirect the user to the home page
    window.location.href = "home.html";

  });