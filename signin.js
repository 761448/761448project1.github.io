function jfun1(){


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
if(!(x.charAt(0).isUpperCase())
{
    window.alert("First character should be upper case");
}
else{
    if(y==""){
        window.alert("enter password");
        return false
    }
    
}

}