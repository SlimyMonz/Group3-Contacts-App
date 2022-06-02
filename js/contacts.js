// contacts functions

const urlBase = 'http://group3.rocks/LAMPAPI';
const extension = 'php';

let userId = 0;

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
}

function deleteContact() {
    //grab contact ID and save to an object

    //JSON.stringify(object)

    //create url to POST to

    //
}

