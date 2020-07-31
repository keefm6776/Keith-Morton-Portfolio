function validateForm() {
  var x = document.forms["contact-form"]["name"].value;
  var y = document.forms["contact-form"]["message"].value;
  var email = document.forms["contact-form"]["email"].value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (x == "") {
    alert("Name must be filled out!");
    return false;
  }
  if (re.test(email) == false) {
    alert("Your email is invalid! It must be in the format USERNAME@host.com");
    return false;
  }
  if (y == "") {
    alert("You must include a message!");
    return false;
  }
 
} 

