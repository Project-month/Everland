'use strict';

const donatForm = document.querySelector('.donat .donation-form');
const submitButton = donatForm.querySelector('.donation-form__submit-button');

const supportSection = document.querySelector('.support');
const supportForm = supportSection.querySelector('.donation-form');

function changeNameButtonNews() {
  // функция меняет текст кнопки "Все новости" на "Посмотреть все"
  // при расширении экрана от 768px до 1439px
  const buttonNews = document.querySelector('#button-news');
  buttonNews.textContent = 'Посмотреть все';
}

function closeDescription(evt) {
  const clickedButton = evt.target
    .closest('.accordion')
    .querySelector('.accordion__button');
  const descriptionElement = clickedButton
    .closest('.accordion')
    .querySelector('.accordion__description');

  if (
    descriptionElement &&
    !descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.add('accordion__description_close');
    clickedButton.classList.remove('accordion__button_close');
  } else if (
    descriptionElement &&
    descriptionElement.classList.contains('accordion__description_close')
  ) {
    descriptionElement.classList.remove('accordion__description_close');
    clickedButton.classList.add('accordion__button_close');
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
  }

  supportForm.scrollIntoView();
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

donatForm.addEventListener('submit', handleDonatFormSubmit);
