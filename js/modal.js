function drag()
{
    /*alert("we workin'");*/
    
    $( function() 
    {
        $( "#exampleModal" ).draggable();
    } 
    );
    
    $( function() 
    {
        $("#exampleModal").on("hidden.bs.modal", function() 
        {
            //alert("nothin");
            
            clear();
            
            
        });
    });

    $( function() 
    {
        $("#exampleModal").on("show.bs.modal", function() 
        {
            //alert("yessem");
            $("#first_name").val("First Name");
            $("#last_name").val("Last Name");
            $("#reg_login").val("Login");
            $("#reg_password").val("Password");
            
        });
    });
    

}
function spinnerOn()
{
    
    $('#spinner').removeClass("d-none");
    
}
function spinnerOff()
{
    
    $('#spinner').addClass("d-none");
    
}

function testo()
{
    alert("srz biz");
}



