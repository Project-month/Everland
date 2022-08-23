'use strict';

const donatForm = document.querySelector('.donat .donation-form');
const submitButton = donatForm.querySelector('.donation-form__submit-button');

const supportSection = document.querySelector('.support');
const supportForm = supportSection.querySelector('.donation-form');
const amountInput = supportForm.querySelector('#amount');
const amountRadios = supportForm
  .querySelector('.donation-form__fieldset_for_amount')
  .querySelectorAll("input[name='donation-amount']");
const SHOW_ANIMATION_DELAY = 20;

let btnSliderFwd = document.querySelector('#btn-slider-fwd');
let btnSliderBack = document.querySelector('#btn-slider-back');
let slideIndex = 1;

function showElement(elem) {
  if (elem.classList.contains('hidden')) {
    elem.classList.remove('hidden');
    setTimeout(function () {
      elem.classList.remove('visuallyhidden');
    }, SHOW_ANIMATION_DELAY);
  }
}

function hideElement(elem) {
  if (!elem.classList.contains('hidden')) {
    elem.classList.add('visuallyhidden');
    elem.addEventListener('transitionend', () => elem.classList.add('hidden'), {
      capture: false,
      once: true,
      passive: false,
    });
  }
}

function handleAmountRadioChange(evt) {
  const id = evt.target.id;
  if (id === 'donation-amount-other') {
    showElement(amountInput);
  } else {
    hideElement(amountInput);
  }
}

function changeNameButtonNews() {
  // функция меняет текст кнопки "Все новости" на "Посмотреть все"
  // при расширении экрана от 768px до 1439px
  const buttonNews = document.querySelector('#button-news');
  buttonNews.textContent = 'Посмотреть все';
}

function closeDescription(evt) {
  const currentAccordion = evt.target.closest('.accordion');
  const clickedButton = currentAccordion.querySelector('.accordion__button');
  const descriptionElement = currentAccordion.querySelector(
    '.accordion__description'
  );

  if (
    descriptionElement &&
    !descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.add('accordion__description_close');
    clickedButton.classList.remove('accordion__button_close');
    currentAccordion.classList.remove('accordion_close');
  } else if (
    descriptionElement &&
    descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.remove('accordion__description_close');
    clickedButton.classList.add('accordion__button_close');
    currentAccordion.classList.add('accordion_close');
  }
}

function handleDonatFormSubmit(evt) {
  evt.preventDefault();
  const checkedCheckbox = donatForm.querySelector(
    '.donation-form__radio:checked'
  );

  if (checkedCheckbox !== null) {
    const id = checkedCheckbox.id.replace('donat', 'donation');
    const checkbox = supportForm.querySelector(`#${id}`);
    checkbox.checked = true;

    if (id === 'donation-amount-other') {
      showElement(amountInput);
    } else {
      hideElement(amountInput);
    }
  }

  supportForm.scrollIntoView();
}

function back() {
  showSlides((slideIndex -= 1));
}

function forward() {
  showSlides((slideIndex += 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.project__container');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'grid';
}

document.querySelectorAll('.accordion__button').forEach((button) => {
  button.addEventListener('click', (evt) => closeDescription(evt));
});

donatForm.addEventListener('submit', handleDonatFormSubmit);

amountRadios.forEach((radio) =>
  radio.addEventListener('change', handleAmountRadioChange)
);

if (
  document.documentElement.clientWidth >= 768 &&
  document.documentElement.clientWidth <= 1439
) {
  changeNameButtonNews();
}

showSlides(slideIndex);
