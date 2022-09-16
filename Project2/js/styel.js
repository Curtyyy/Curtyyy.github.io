function reveal() {
    var reveals = document.querySelectorAll(".slide-down");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

/* tab button */

function show1() {
  document.getElementById("tab-image-1").style.display = "block";
  document.getElementById("tab-image-2").style.display = "none";
  document.getElementById("tab-image-3").style.display = "none";
}

function show2() {
  document.getElementById("tab-image-1").style.display = "none";
  document.getElementById("tab-image-2").style.display = "block";
  document.getElementById("tab-image-3").style.display = "none";
}

function show3() {
  document.getElementById("tab-image-1").style.display = "none";
  document.getElementById("tab-image-2").style.display = "none";
  document.getElementById("tab-image-3").style.display = "block";
}
  