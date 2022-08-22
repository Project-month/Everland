'use strict';

function changeNameButtonNews() {
  // функция меняет текст кнопки "Все новости" на "Посмотреть все"
  // при расширении экрана от 768px до 1439px
  const buttonNews = document.querySelector('#button-news');
  buttonNews.textContent = 'Посмотреть все';
}

function closeDescription(evt) {
  const currentAccordion = evt.target
    .closest('.accordion');
  const clickedButton = currentAccordion
    .querySelector('.accordion__button');
  const descriptionElement = currentAccordion
    .querySelector('.accordion__description');

  if (
    descriptionElement &&
    !descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.add('accordion__description_close');
    clickedButton.classList.remove('accordion__button_close');
    currentAccordion.classList.remove('accordion_close')
  } else if (
    descriptionElement &&
    descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.remove('accordion__description_close');
    clickedButton.classList.add('accordion__button_close');
    currentAccordion.classList.add('accordion_close')
  }
}

if (
  document.documentElement.clientWidth >= 768 &&
  document.documentElement.clientWidth <= 1439
) {
  changeNameButtonNews();
}

document.querySelectorAll('.accordion__button').forEach((button) => {
  button.addEventListener('click', (evt) => closeDescription(evt));
});
