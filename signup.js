function validateForm(){
    var firstname=document.signup.firstname.value;
    var lastname=document.signup.lastname.value;
    var password1=document.signup.password.value;
    var password2=document.signup.repassword.value;
    if(firstname==""){
        alert("fill first name");
        return false;
    }
    if(lastname==""){
            alert("fill last name");
            return false;
    }
    if(password1==password2){
        return true;
    }
    else{
        alert("password don't match");
        return false;
    }
    }