function newstart(){
    document.getElementById("news1").style.display="none";
    document.getElementById("news2").style.display="none";
    document.getElementById("news3").style.display="none";
  
}
function news1(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("news1");
    var btnText = document.getElementById("read1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      document.getElementById("first").style.fontSize="15px";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      document.getElementById("first").style.fontSize="20px";
    }

}
function news2(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("news2");
    var btnText = document.getElementById("read2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      document.getElementById("second").style.fontSize="15px";
     
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      document.getElementById("second").style.fontSize="20px";
      
    }
}
function news3(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("news3");
    var btnText = document.getElementById("read3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      document.getElementById("third").style.fontSize="15px";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      document.getElementById("third").style.fontSize="20px";
    }
}