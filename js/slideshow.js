var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slide-dot");
  var homepageHeader = document.getElementById("homepage-header");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if ( n === 1 || n === 4 ) {
    homepageHeader.classList.add("homepage-header-estimate");
    homepageHeader.classList.remove("homepage-header-family");
    homepageHeader.classList.remove("homepage-header-customer");
  }
  if ( n === 2 ) {
    homepageHeader.classList.add("homepage-header-family");
    homepageHeader.classList.remove("homepage-header-estimate");
    homepageHeader.classList.remove("homepage-header-customer");
  }
  if ( n === 3 ) {
    homepageHeader.classList.add("homepage-header-customer");
    homepageHeader.classList.remove("homepage-header-family");
    homepageHeader.classList.remove("homepage-header-estimate");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}