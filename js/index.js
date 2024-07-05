// Resume expand/collapse
let companyList = document.querySelectorAll('.companyList');

companyList.forEach((company) => {
  company.addEventListener('click', () => {
    company.classList.toggle('active');
    company.querySelector('.expandDetails').classList.toggle('active');
    if (company.querySelector('.expandDetails').classList.contains('active')) {
      company.querySelector('img').style.transform = 'rotateZ(270deg)';
    } else {
      company.querySelector('img').style.transform = 'rotateZ(90deg)';
    }
  });
});

// Testimonial slider
let slideIndex = 0,
  slides, dots;

function currentSlide(index) {
  if (index > slides.length) {
    index = 1
  } else if(index < 1){
    index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
  slideIndex = index++
}

function showSlides() {
  let i;
  slides = document.getElementsByClassName("slide");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex> slides.length) {
    slideIndex = 1
  }    
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000);
}

showSlides();