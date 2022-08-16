"use strict";

function changeNameButtonNews() {//функция меняет текст кнопки "Все новости" на "Посмотреть все" при расширении экрана от 768px до 1439px
  const buttonNews = document.querySelector("#button-news");
  buttonNews.textContent = "Посмотреть все";
}

if (
  document.documentElement.clientWidth >= 768 &&
  document.documentElement.clientWidth <= 1439
) {
  changeNameButtonNews();
}
