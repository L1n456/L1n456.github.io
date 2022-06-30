error= document.querySelector(".error");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate() {
    if( document.myForm.email.value == ""){
       document.myForm.email.style.borderColor = "hsl(354, 100%, 66%)"; 
       error.innerHTML = "Please provide an email address"
       return false;

    }else if(!(document.myForm.email.value.match(mailformat))){
        error.innerHTML = "Please provide a valid email address"
        document.myForm.email.style.borderColor = "hsl(354, 100%, 66%)";
        return false;
        
    }else
        error.style.display = "none";
        alert("email is valid");
        return( true );
}