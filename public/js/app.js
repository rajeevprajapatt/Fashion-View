const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}

let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

let slideshow = () => {
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("activate"));

    slideIndex = (slideIndex % totalSlides) + 1;
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("activate");
    setTimeout(slideshow, 2000);
}
slideshow();


