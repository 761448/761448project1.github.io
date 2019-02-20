function jfun1(){
    windows.open('signin.html','mywindow')
    
}
function jfun2(){

}
function jfun3(){
var x=frm1.name.value;
var y=frm1.password.value;
if(x.length==0){
    window.alert("enter username");
    return false
}
else{
    if(y==""){
        window.alert("enter password");
        return false
    }
    
}

}