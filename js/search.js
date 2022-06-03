// search function

function doSearch()
{
    let srch = document.getElementById("search_bar").value;
    document.getElementById("contact_display_box").innerHTML = "";

    let contactList = "";

    let tmp =
        {	search: srch,
            userId: userId
        };
    let jsonPayload = JSON.stringify( tmp );

    let url = urlBase + '/Search.' + extension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try
    {
        xhr.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("contact_display_box").innerHTML = "Contact(s) has been retrieved";
                let jsonObject = JSON.parse( xhr.responseText );

                console.log(jsonObject.results);
                for( let i=0; i<jsonObject.length; i++ )
                {
                    contactList += jsonObject.results[i];
                    if( i < jsonObject.results.length - 1 )
                    {
                        contactList += "<br />\r\n";
                    }
                }
              

                document.getElementsByTagName("p")[0].innerHTML = contactList; //if not working try [3] instead of [0]

                alert(contactList); //this is for testing if the search actually works even if we can't display it
            }
        };
        xhr.send(jsonPayload);
    }
    catch(err)
    {
        document.getElementById("contact_display_box").innerHTML = err.message;
    }

}

