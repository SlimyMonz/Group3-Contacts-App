function clearcookie(){
    document.cookie = "";
    userId = -1;
}


function logout(){
    clearcookie();
    document.location.href="/";
}