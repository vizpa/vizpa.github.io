function validateForm() {
  var validity = true; // assume valid

  if (!check_empty(document.forms["mail"]["name"].value))
        { validity = false; 
          document.getElementById('name').innerHTML = 'Please enter your name';
        }
  else if (!check_email(document.forms["mail"]["email"].value))
        { validity = false; 
          document.getElementById('email').innerHTML = 'Please match the requested format'; 
        }
  else if (!check_empty(document.forms["mail"]["message"].value))
        { validity = false; 
          document.getElementById('message').innerHTML = 'Please fill out this field'; 
        }
  else if (validity)
        {alert("Thanks so much for reaching out!\n" +
        "Your message has been sent and\n" +
        "I will get back to you as soon as possible.");
      }
  return validity;
}

function check_empty(text) {
  return (text.length > 0); // returns false if empty
}

function check_email(address) {
  if ((address == "")
    || (address.indexOf ('@') == -1)
    || (address.indexOf ('.') == -1))
      return false;
  return true;
}