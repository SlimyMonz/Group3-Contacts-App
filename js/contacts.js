// contacts functions

function addContact()
{
    let contactName = $("#name").val();
    let contactPhone = $("#phone").val();
    let contactEmail = $("#email").val();

    let newContact = {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        userId: userId
    };

    let jsonPayload = JSON.stringify( newContact );

    let url = urlBase + '/Add.' + extension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                //document.getElementById("colorAddResult").innerHTML = "Color has been added";
            }
        };
        xhr.send(jsonPayload);
    }
    catch(err)
    {
        //document.getElementById("colorAddResult").innerHTML = err.message;
    }

    // display in recently added
    let temp0 = document.getElementById("recently_added_name");
    temp0.innerHTML = newContact.name;

    let temp1 =document.getElementById("recently_added_phone");
    temp1.innerHTML = newContact.phone;

    let temp2 = document.getElementById("recently_added_email");
    temp2.innerHTML = newContact.email;

    let title_element = document.getElementById("recently_added_container");
    title_element.style = "display: block;";

}


function massAddContact(addName, addPhone, addEmail)
{
    let contactName = addName;
    let contactPhone = addPhone;
    let contactEmail = addEmail;
    //alert(" againname: " + contactName + " phone: " + contactPhone + " email: " + contactEmail + "id: " + userId);


    let newContact = {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        userId: userId
    };

    let jsonPayload = JSON.stringify( newContact );

    let url = urlBase + '/Add.' + extension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert("here?");
                //document.getElementById("colorAddResult").innerHTML = "Color has been added";
            }
        };
        xhr.send(jsonPayload);
    }
    catch(err)
    {
        //document.getElementById("colorAddResult").innerHTML = err.message;
    }    
}



