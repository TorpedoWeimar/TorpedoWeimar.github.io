var slideIndex = 1;
showDivs(slideIndex);
var t;

function plusDivs(n) {
  clearInterval(t);
  showDivs(slideIndex += n);
  startSlideShow();
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function startSlideShow() {
  showDivs(slideIndex = slideIndex);
  t = setInterval("showDivs(slideIndex += 1)", 5000);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  var dots = document.getElementsByClassName("demo");
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}