function validateall() {
  //This is used to collect the value from the
  //label of name
  var first_name = document.formw.name.value;
  //This is used to collect the value from the
  //label of email
  var Email = document.formw.email.value;
   //This is used to collect the value from the
  //label of subject
  var SUBJECT = document.formw.subject.value;
   //This is used to collect the value from the
  //label of message
  var MESSGE = document.formw.message.value;
  //if the given name matches the below content
  //it will submit.otherwise you'll get an error
  var nameformat = /^[a-zA-Z ]+$/;

  if (first_name.match(nameformat)) {
  } else {
    window.alert("Please enter your full name properly!");
    
    document.formw.name.focus();
    return false;
  }

 //if the given email content matches the below content
  //it will submit.otherwise you'll get an error
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (Email.match(mailformat)) {
  } else {
    alert("Invalid email address.");
    document.formw.email.focus();
    return false;
  }
  //The given subject and message does not contain
  //any content , these 2 are 2 does not sumbit.
  if (SUBJECT == "") {
    window.alert("Enter Subject!");
    document.formw.subject.focus();
    return false;
  }
  if (MESSGE== "") {
    window.alert("Enter Message!");
    document.formw.subject.focus();
    return false;
  }
  return true;
}
//Actually in Email and name does not contain content in if contition.