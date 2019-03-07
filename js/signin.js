
function login(){
    
    var str=document.frm1.name.value;
    var patt1 = /[^0-9]/g;
    var patt2 = /[@]/g;
    var patt3 = /[^.com]/g;
    var result = str.match(patt1);
    var result2=str.match(patt2);
    var result3=str.match(patt3);
   
    if(str==""){
     alert("enter your email or mobile No.");
    }
    else{
    if(result==null){
        
        if(str.length!=10){
            alert("enter 10 digit mobile number");
        }
        
        }
    else{
      
      
        if(result2.length != 1){
         alert("enter correct email");
        }
        else{
            if(result3==null){
                alert("enter correct email");
            }
         
        }

       }
       }
}