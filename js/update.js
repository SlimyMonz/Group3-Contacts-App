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


    let contactName = '';
    let contactPhone = '';
    let contactEmail = '';

    let user_Id = info.data; //gets contact's id

    //alert("row" + info.parentNode.parentNode.rowIndex + " - column" + info.parentNode.cellIndex);


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
                doSearch();
            }
        };
        xhr.send(jsonPayload);
    }
    catch(err)
    {
        //document.getElementById("colorAddResult").innerHTML = err.message;
    }
}
