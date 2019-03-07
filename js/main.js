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
else{
    if(y==""){
        window.alert("enter password");
        return false
    }
    
}

}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }