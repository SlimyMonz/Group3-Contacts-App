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
    let title_element = document.getElementById("recently_added_title");
    title_element.style.display = "block";
    

    let recently_added = document.getElementById("recently_added");

    recently_added_arr.push(newContact);

    for (let i = 0; i < recently_added_arr.length; i++) 
    {
        console.log("made it into for loop");
         let my_row = recently_added.insertRow(i);
         let cell_one = my_row.insertCell(0);
         let cell_two = my_row.insertCell(1);
         let cell_three = my_row.insertCell(2);
         let cell_four = my_row.insertCell(3);
         let cell_five = my_row.insertCell(4);
 
         cell_one.classList.add("table_data");
         cell_two.classList.add("table_data");
         cell_three.classList.add("table_data");
         cell_four.classList.add("table_button_class");
         cell_five.classList.add("table_button_class");
         
         cell_one.innerHTML = recently_added_arr[i].name;
         cell_two.innerHTML = recently_added_arr[i].phone;
         cell_three.innerHTML = recently_added_arr[i].email;
 
 
 
         //editContact() located in update.js
         cell_four.innerHTML = "<div id=\"table_edit\" data-index=\"\" ;\"><ion-icon name=\"create-outline\"></ion-icon></div>";
 
         //didn't get to test this because fileZilla was acting whack
         cell_five.innerHTML = "<div id=\"table_delete\" data-index=\"\"> <ion-icon name=\"trash-outline\"></ion-icon></div>";
    }
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



