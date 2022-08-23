"use strict";

// let btnSliderFwd = document.querySelector('#btn-slider-fwd');
// let btnSliderBack = document.querySelector('#btn-slider-back');
let slider = document.querySelectorAll(".project__container");

let currentSlide = 0;

function showSlides() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.add('project__container_slider');
  }
    // slider[currentSlide].classList.remove('project__container_slider');

}

showSlides();

document.querySelector("#btn-slider-fwd").onclick = function () {
  if (currentSlide - 1 == -1) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlides()
};
document.querySelector("#btn-slider-back").onclick = function() {
  if (currentSlide + 1 == slider.length) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlides()
};

// let slideIndex = 1;

// showSlides(slideIndex);

// function back() {
//   showSlides((slideIndex -= 1));
// }

// function forward() {
//   showSlides((slideIndex += 1));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll('.project__container');

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slides[slideIndex - 1].style.display = 'grid';
// }

// showSlides(slideIndex);

// btnSliderFwd.addEventListener("click", () => forward());
// btnSliderBack.addEventListener("click", () => back());
