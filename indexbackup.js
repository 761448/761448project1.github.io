window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("aftermyOverlay").style.display = "none";
  
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("aftermyOverlay").style.display = "block";
}