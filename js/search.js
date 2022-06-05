// search function


function doSearch()
{
    let srch = document.getElementById("search_bar").value;
    document.getElementById("contact_display_box").innerHTML = "";

    let tmp =
        {
            search: srch,
            userId: userId
        };

    let jsonPayload = JSON.stringify(tmp);

    let url = urlBase + '/Search.' + extension;

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

        let id = contactList[i].id;
        
        cell_one.innerHTML = contactList[i].name;
        cell_two.innerHTML = contactList[i].phone;
        cell_three.innerHTML = contactList[i].email;

        //showDetails(this) is a proof of concept for getting the id for a specific contact per button, it worked
        //showDetails is a function actually located in contact.html fyi
        cell_four.innerHTML = "<button id=\"table_edit\" data-index=\"\" onclick=\"showDetails(this);\"> Edit </button>";

        //didn't get to test this because fileZilla was acting whack
        cell_five.innerHTML = "<button id=\"table_delete\" data-index=\"\" onclick=\"deleteContact(this);\"> Delete </button>";
        
        table_edit.data = id;   
        table_edit.id = "table_edit" + id;      

        table_delete.data = id; //this is very important for delete contact, 
                              //references data-index of button + stores contact id there

        table_delete.id = "table_delete" + id; //"dynamically" changing the id of the buttons because the id should be unique
         
        //ignore
        // $("#table_edit").data("index", id); // <- second parameter
        // console.log($("#table_edit").data("index"));

    }

    
}

