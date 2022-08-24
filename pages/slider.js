"use strict";
/* для слайдера в разделе секции фото-проекты */

let slider = document.querySelectorAll(".project__container");
let currentSlide = 0;

function hideSlide() {
  slider[currentSlide].classList.remove("project__container_showed");
}

function showSlides() {
  slider[currentSlide].classList.add("project__container_showed");
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


const capitalContentSection = document.querySelector('.capital__content');
const capitalSubtitle = capitalContentSection.querySelector('.capital__subtitle');
const capitalPreTitle = capitalContentSection.querySelector('.capital__everland');
const capitalTitle = capitalContentSection.querySelector('.capital__title');
const capitalSliderCount = capitalContentSection.querySelector('.big-text');
const capitalPreviousSlideButton = capitalContentSection.querySelector('.button__click-back');
const capitalNextSlideButton = capitalContentSection.querySelector('.button__click-forward');

const capitalFirstImage = capitalContentSection.querySelector('.capital__image-one');
const capitalSecondImage = capitalContentSection.querySelector('.capital__image-two');




const sliderInfoList = [{preTitleColored : "Мы работаем с",title : " 2016 года по России и СНГ и помогаем людям с инвалидностью. ",subtitle : "Everland — социальный предпринимательский проект",imageFirst: {alt: "Семинары", src : "./images/Image_2.jpg"},imageSecond: {alt: "Беседы", src : "./images/Image_1.jpg"}},{preTitleColored : "Everland",title : " — социальный предпринимательский проект",subtitle : "Мы работаем с 2016 года по России и СНГ и помогаем людям с инвалидностью устойчиво интегрироваться в открытый рынок труда",imageFirst: {alt: "Беседы", src : "./images/Image_1.jpg"},imageSecond: {alt: "Семинары", src : "./images/Image_2.jpg"}}]



function getSlideInfo(){
  const sliderCountList =  capitalSliderCount.textContent.split("/")
  let currentCount = Number(sliderCountList[0])
  if (currentCount % 1 === 0 && currentCount % 2 !== 0){
    return sliderInfoList[1]
  }
  else {
    return sliderInfoList[0]
  }
}

function nextSlide(){
  const sliderCountList =  capitalSliderCount.textContent.split("/")
  let currentCount = Number(sliderCountList[0])
  let maxCount = sliderCountList[1]

  if (currentCount < maxCount){
    currentCount += 1
    capitalSliderCount.textContent = `${currentCount}/${maxCount}`
    const slideInfo = getSlideInfo()
    const preTitleNode = capitalPreTitle.cloneNode(true)
    preTitleNode.textContent = slideInfo.preTitleColored

    capitalTitle.textContent = ""
    capitalTitle.append(preTitleNode,slideInfo.title)

    capitalSubtitle.textContent = slideInfo.subtitle
    capitalFirstImage.src = slideInfo.imageFirst.src
    capitalFirstImage.alt = slideInfo.imageFirst.alt
    capitalSecondImage.src = slideInfo.imageSecond.src
    capitalSecondImage.alt = slideInfo.imageSecond.alt
  }

}
function forwardSlide(){
  const sliderCountList =  capitalSliderCount.textContent.split("/")
  let currentCount = Number(sliderCountList[0])
  let maxCount = sliderCountList[1]

  if (currentCount > 1){
    currentCount -= 1
    capitalSliderCount.textContent = `${currentCount}/${maxCount}`
    const slideInfo = getSlideInfo()
    const preTitleNode = capitalPreTitle.cloneNode(true)
    preTitleNode.textContent = slideInfo.preTitleColored

    capitalTitle.textContent = ""
    capitalTitle.append(preTitleNode,slideInfo.title)

    capitalSubtitle.textContent = slideInfo.subtitle
    capitalFirstImage.src = slideInfo.imageFirst.src
    capitalFirstImage.alt = slideInfo.imageFirst.alt
    capitalSecondImage.src = slideInfo.imageSecond.src
    capitalSecondImage.alt = slideInfo.imageSecond.alt
  }

}

capitalNextSlideButton.addEventListener("click",() => nextSlide())
capitalPreviousSlideButton.addEventListener("click",() => forwardSlide())
