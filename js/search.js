// search function


function doSearch()
{
    let srch = document.getElementById("search_bar").value;
    let prop = $('#properties').val();
    document.getElementById("contact_display_box").innerHTML = "";

    let tmp =
        {
            property: prop,
            search: srch,
            userId: userId
        };

    let jsonPayload = JSON.stringify(tmp);

    let url = urlBase + '/Search.' + extension;
    console.log(tmp);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(xhr.responseText + "bruh mmnt extravaganza");
                let jsObjectArr = JSON.parse(xhr.responseText);

                display_contacts(jsObjectArr.searchResult);

            }
        };
        xhr.send(jsonPayload);
    } catch (err) {
        document.getElementById("contact_display_box").innerHTML = err.message;
    }

}


function display_contacts(contactList){

    let my_table = document.getElementById("contact_display_box");
    
    console.log("there should be " + contactList.length + " rows");

    for (let i = 0; i < contactList.length; i++) {
        let my_row = my_table.insertRow(i);
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


        let id = contactList[i].id;
        
        
        cell_one.innerHTML = contactList[i].name;
        cell_two.innerHTML = contactList[i].phone;
        cell_three.innerHTML = contactList[i].email;

        //not quite working yet concept for filling in the edit modal with original contacts data
        //alert(my_table.row.item(0).cells.item(0).innerHTML);
        
       
        
        
        //showDetails is a function actually located in contact.html fyi

        //editContact() located in update.js
        cell_four.innerHTML = "<div id=\"table_edit\" data-index=\"\" onclick=\"editContact(this);\"><ion-icon name=\"create-outline\"></ion-icon></div>";

        //didn't get to test this because fileZilla was acting whack
        cell_five.innerHTML = "<div id=\"table_delete\" data-index=\"\" onclick=\"deleteContact(this);\"> <ion-icon name=\"trash-outline\"></ion-icon></div>";
        
        table_edit.data = id; 
        table_edit.id = "table_edit" + id;  

        table_delete.data = id; //this is very important for delete contact, same with edit ofc 
                              //references data-index of button + stores contact id there
        table_delete.id = "table_delete" + id; //"dynamically" changing the id of the buttons because the id should be unique
         

        //alert(my_table.rows[0].cells[0].innerHTML);

    }

    
}

