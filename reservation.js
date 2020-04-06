$(document).ready (function(){
$("#arrival_date").focus();
$("#reservation_form").submit( function (event)
{
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var phoneNo = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

//Email, phone no. pattern 
      
     var isValid = true;
    
 //Function for booking date 
    var arrivalDate = $("#arrival_date").val().trim();
    if (arrivalDate == ""){
        $("#arrival_date").next().text()("You have to fill this field.");
        isvalid =false;     
    }
    else{
        $("#Arrival_Date").next().text("");
        
    }
    $("#arrival_date").val(arrivalDate);

  

//Functions for nights for reservation
    
    var nights = $("#nights").val().trim();
    if (nights == "") {
        $("#nights").next().text("You have to fill this field.");
        isValid = false;
    } 
    else if (isNaN($("#nights").val())) {
        $("#nights").next().text("This field must be filled in numeric.");
        isValid = false;
    }
    else {
        $("#nights").next().text("");
    }
    
    $("#nights").val(nights);

    
//function for Name
    
    var name = $("#name").val().trim();
    if (name == "") {
        $("#name").next().text("You have to fill this field.");
        isValid = false;
    }
    else {
        $("#name").val(name);
        $("#name").next().text("");
    }
    $("#name").val(name);
    
    
//Function for email id
    
    var email = $("#email").val();

    if (email == "") {
        $("#email").next().text("You have to fill this field.");
        isValid = false;
    }
    else if (!emailPattern.test(email))
    {
        $("#email").next().text("Enter the valid email address.");
        isValid = false;
    }
    else {
        $("#email").next().text("");
    }
    $("#email").val(email);
    
    
//Function for Phone Number   
       var phone = $("#phone").val();

    if (email == "") {
        $("#phone").next().text("You have to fill this field.");
        isValid = false;
    }
    else if (!phoneNo.test(phone))
    {
        $("#phone").next().text("Enter the valid phone number.");
        isValid = false;
    }
    else {
        $("#phone").next().text("");
    }

    $("#phone").val(phone);

    if (isValid == false)
    {
        event.preventDefault();
    }
}
 );
                              });
 