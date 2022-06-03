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

                document.getElementById("contact_display_box").innerHTML = contactList;
                alert(contactList); //this is for testing if the search actually works even if we can't display it
            }
        };
        xhr.send(jsonPayload);
    } catch (err) {
        document.getElementById("contact_display_box").innerHTML = err.message;
    }

}

