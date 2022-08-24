"use strict";
/* для слайдера в разделе секции фото-проекты */

let slider = document.querySelectorAll(".project__container");
let currentSlide = 0;

function hideSlide() {
  slider[currentSlide].classList.remove("project__container_slider");
}

function showSlides() {
  slider[currentSlide].classList.add("project__container_slider");
 /*в макете, указан список рекомендуемых цветов для фона слайдера. Добавим случайный порядок их перименения*/
  let colors = ["#E7F0FF", "#FEEFEA", "#DAEFD5", "#EAE6FF"];
  let randomColorsSlider = colors[Math.floor(Math.random() * colors.length)];
  slider[currentSlide].style.backgroundColor = randomColorsSlider;
}

showSlides();

document.querySelectorAll(".button_theme_black-click-forward").forEach((btn) =>
  btn.addEventListener("click", () => {
    hideSlide();
    if (currentSlide - 1 == -1) {
      currentSlide = slider.length - 1;
    } else {
      currentSlide--;
    }
    showSlides();
  })
);

document.querySelectorAll(".button_theme_black-click-back").forEach((btn) =>
  btn.addEventListener("click", () => {
    hideSlide();
    if (currentSlide + 1 == slider.length) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlides();
  })
);
/* конец */
