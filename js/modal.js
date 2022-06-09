function drag()
{
    
    $( function() 
    {
        $( "#exampleModal" ).draggable();
    } 
    );
    $( function() 
    {
        $( "#getModal" ).draggable();
    } 
    );
    
    $( function() 
    {
        $("#exampleModal").on("hidden.bs.modal", function() 
        {
            
            
        });
    });

    $( function() 
    {
        $("#exampleModal").on("show.bs.modal", function() 
        {
            //alert("yessem");
            // $("#first_name").val("First Name");
            // $("#last_name").val("Last Name");
            // $("#reg_login").val("Login");
            // $("#reg_password").val("Password");
            
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

//this is useful to me for testing the editContact modal locally for now
function testo()
{
    $( function()
    {
        $("#getModal").modal("show"); 
    })
  
}



