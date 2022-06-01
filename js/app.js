function showAlert() {
    var myText = "Did you think there would be somthing here?";
    alert (myText);
}

// open pop-up menu for add contact
function show_add_contact(){
  
  var static_body = document.getElementById("static_body");
  static_body.style = "opacity: .33;"

  var add_contact_form = document.getElementById("add_contact_form");
  add_contact_form.style = "display: block;"

  // static_body_click_behavior();
}

function static_body_click_behavior(){
  var static_body = document.getElementById("static_body");
  // static_body.onclick = close_add_box();
}


function submit_form_data(){
  addContact();
  close_add_box();
  // var static_body = document.getElementById("static_body");
  // static_body.onclick = "";

}

// close pop up menu. right now this is more of a cancel than a submit
function close_add_box(){
  var add_contact_form = document.getElementById("add_contact_form");
  var static_body = document.getElementById("static_body");
  add_contact_form.style = "display: none;";
  static_body.style = "opacity: 1;";
}


