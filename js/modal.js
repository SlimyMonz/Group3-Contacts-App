function drag()
{
    
    $( function() 
    {
        $( "#exampleModal" ).draggable();
    } 
    );
    
    $( function() 
    {
        $("#exampleModal").on("hidden.bs.modal", function() 
        {
            
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
function modalTest()
{
    alert("testo");
    $("#getModal").modal("show");
}



