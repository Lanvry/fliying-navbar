window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Jika scroll lebih dari 50 piksel
        document.querySelector(".logo").classList.add("visible");
    }
    else{
        document.querySelector(".logo").classList.remove("visible");
    }
});

function toggle(){
    var caretElement = document.getElementById("navbar");
  if (caretElement.classList.contains("active")) {
    caretElement.classList.remove("active");
  } else {
    caretElement.classList.add("active");
  }

}