//important variable for verifying that the modal was canceled rather than submitted 1 = canceled
var theGreatEscape = 0;

function cancelEdit()
{

    theGreatEscape = 1;
    $("#getModal").modal("hide"); //hides modal, this function runs whenever the modal is canceled, only on buttonclick
                                  //this is why this modal is set so you can't exit any other way (keyboard, backdrop)

}

// to self: don't close modal on cancel, close it on submit

 async function showModal() //where the magic happens
{

    $("#getModal").modal("show"); //shows modal ->
    return new Promise(resolve => //-> promises to resolve the await only when ->

        $("#getModal").on("hidden.bs.modal", () => // -> the modal is hidden ->
        {
            resolve();  // -> regardless of how it was hidden, we now have waited and either set greatescape or didn't
        }
        )
     
    );

}


 async function editContact(info)
{

    let my_table = document.getElementById("contact_display_box");
    let row = info.parentNode.parentNode.rowIndex;

    let contactName = my_table.rows[row].cells[0].innerHTML;
    let contactPhone = my_table.rows[row].cells[1].innerHTML;
    let contactEmail = my_table.rows[row].cells[2].innerHTML;

    let user_Id = info.data; //gets contact's id

    alert("row " + row + " - column" + info.parentNode.cellIndex);
    alert("name: " + contactName + " phone: " + contactPhone + " email: " + contactEmail);


    // alert("name in row: " + my_table.rows[info.parentNode.parentNode.rowIndex].cells[0].innerHTML);
    // alert("phone in row: " + my_table.rows[info.parentNode.parentNode.rowIndex].cells[1].innerHTML);
    // alert("eMAIL in row: " + my_table.rows[info.parentNode.parentNode.rowIndex].cells[2].innerHTML);

    document.getElementById("editName").value = contactName;
    document.getElementById("editPhone").value = contactPhone;
    document.getElementById("editEmail").value = contactEmail;


    showModal(); //pops up the modal

    await showModal(); //waits at this point before running any more of this function's code


    if(theGreatEscape == 1) //we do NOT want to continue because user canceled
    {
        theGreatEscape = 0;
        return; //nope out
    }
   
    //user has decided to actually edit, gets values inputted in modal
    contactName = $("#editName").val();
    contactPhone = $("#editPhone").val();
    contactEmail = $("#editEmail").val();

    //save into object
    let editedContact = 
    {
        newPhone: contactPhone,
        newEmail: contactEmail,
        newName: contactName,
        id: user_Id
        
    };
   

    //JSON.stringify(object) etc.
    let jsonPayload = JSON.stringify( editedContact );

    let url = urlBase + '/Update.' + extension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                
                // repaint page
                //doSearch();
                my_table.rows[row].cells[0].innerHTML = contactName;
                my_table.rows[row].cells[1].innerHTML = contactPhone;
                my_table.rows[row].cells[2].innerHTML = contactEmail;
            }
        };
        xhr.send(jsonPayload);
    }
    catch(err)
    {
        //document.getElementById("colorAddResult").innerHTML = err.message;
    }
}
