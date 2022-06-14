// necessary functions for logging in

function doLogin()
{
    userId = 0;
    firstName = "";
    lastName = "";

    let login = document.getElementById("loginName").value;
    let password = document.getElementById("loginPassword").value;
    var hash = md5( password );

    document.getElementById("loginResult").innerHTML = "";
    document.getElementById("registerResult").innerHTML = "";

    //let tmp = {login: login, password: password};
    var tmp = {login: login, password: hash};
    let jsonPayload = JSON.stringify(tmp);

    let url = urlBase + '/Login.' + extension;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    try {
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let jsonObject = JSON.parse(xhr.responseText);
                userId = jsonObject.id;

                if (userId < 1) {
                    document.getElementById("loginResult").innerHTML = "User/Password combination incorrect!";
                    return;
                }

                firstName = jsonObject.firstName;
                lastName = jsonObject.lastName;

                saveCookie();

                window.location.href = "/html/contacts.html";
            }
        };
        xhr.send(jsonPayload);
    } catch (err) {
        document.getElementById("loginResult").innerHTML = err.message;
    }
}


function doRegister()
{

    let contactfirstName = $("#first_name").val();
    let contactlastName = $("#last_name").val();
    let contactLogin = $("#reg_login").val();
    let contactPassword = $("#reg_password").val();

    document.getElementById("registerResult").innerHTML = "";
    document.getElementById("loginResult").innerHTML = "";

    var hash = md5( contactPassword );

    //doesn't actually prevent it yet, just making sure it worked at checking
    if (contactfirstName === '' || contactlastName === '' || contactLogin === '' || contactPassword === '')
    {
        document.getElementById("registerResult").innerHTML = "Please fill out all fields to register!";
        return;
    }
    else
    {

        var newUser = {
            firstName: contactfirstName,
            lastName: contactlastName,
            login: contactLogin,
            password: hash
        };
    
        let jsonPayload = JSON.stringify(newUser);
    
        let url = urlBase + '/Register.' + extension;
    
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        try {
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    //document.getElementById("colorAddResult").innerHTML = "Color has been added";
                    document.getElementById("registerSuccess").innerHTML = "Registration Successful!";
                }
            };
            xhr.send(jsonPayload);
        } catch (err) {
            //document.getElementById("colorAddResult").innerHTML = err.message;
        }

    }

}


