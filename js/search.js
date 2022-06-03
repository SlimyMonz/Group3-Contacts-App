// search function

function doSearch()
{
    let srch = document.getElementById("search_bar").value;
    document.getElementById("contact_display_box").innerHTML = "";

    let contactList = "";

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
                document.getElementById("contact_display_box").innerHTML = "Contact(s) has been retrieved";
                console.log(xhr.responseText + "bruh mmnt extravaganza");
                var jsObjectArr = JSON.parse(xhr.responseText);


                for (let i in jsObjectArr) {
                    console.log(jsObjectArr[i]);
                    contactList += jsObjectArr[i];
                }

                display_contacts(contactList);

            }
        };
        xhr.send(jsonPayload);
    } catch (err) {
        document.getElementById("contact_display_box").innerHTML = err.message;
    }

}

function display_contacts(contactList){
    var my_table = Document.getElementById("contact_display_box");
    var itter = 0;
    for(let i in contactList){
        var my_row = my_table.insertRow(itter);
        var cell_one = my_row.insertCell(0);
        var cell_two = my_row.insertCell(1);
        var cell_three = my_row.insertCell(2);
        var cell_four = my_row.insertCell(3);
        var cell_five = my_row.insertCell(4);

        cell_one.innerHTML = "name goes here";
        cell_two.innerHTML = "phone goes here";
        cell_three.innerHTML = "email goes here";
        cell_four.innerHTML = "<button id=\"table_edit\"> Edit </button>";
        cell_five.innerHTML = "<button id=\"table_delete\"> Edit </button>";

    }
    
}

