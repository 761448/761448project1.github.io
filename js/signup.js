function validateForm(){
    var firstName=document.signup.firstname.value;
    var lastName=document.signup.lastname.value;
    var pass1=document.signup.password.value;
    var pass2=document.signup.repassword.value;
    var Email=document.signup.email.value;
    var mobile=document.signup.mobilenum.value;

    if(firstName==""){
        alert("fill first name");
        return false;
    }
    if(lastName==""){
            alert("fill last name");
            return false;
    }
    if(Email==""){
        alert("enter email address");
    }
    if(mobile==""){
        alert("enter mobile number");
    }
    if(pass1==""){
        alert("enter password");
    }
    if(pass2==""){
        alert("re-enter password");
    }
    if(pass1!=pass2){
        alert("password didn't match")
    }
    if(pass1.length<8 || pass1.length>15){
        alert("password should be between 8 to 15 characters");
    }
   /**  else{
        if(pass1.matches([0-9]{1,},[a-zA-Z]{1,})) {}
        else{
            alert("include atleast 1 UPPERCASE and 1 lowercase and 1 digit and 1 special character among @ # & *");
        }

        }*/
    
    }