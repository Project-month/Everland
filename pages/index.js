"use strict";
//Для блока с новостями - начало
function changeNameButtonNews() {
  //функция меняет текст кнопки "Все новости" на "Посмотреть все" при расширении экрана от 768px до 1439px
  const buttonNews = document.querySelector("#button-news");
  buttonNews.textContent = "Посмотреть все";
}

if (
  document.documentElement.clientWidth >= 768 &&
  document.documentElement.clientWidth <= 1439
) {
  changeNameButtonNews();
}
//Для блока с новостями - конец
//-------------------------------------------
//Для слайдера  - начало
let btnSliderFwd = document.querySelector("#btn-slider-fwd");
let btnSliderBack = document.querySelector("#btn-slider-back");

let slideIndex = 1;
showSlides(slideIndex);

function forward() {
  showSlides((slideIndex += 1));
}

function back() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("#sld");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "grid";
}

btnSliderBack.addEventListener("click", () => back());
btnSliderFwd.addEventListener("click", () => forward());
//Для слайдера  - конец
//-------------------------------------------
