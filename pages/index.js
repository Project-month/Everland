
function closeDescription (evt){
  const clickedButton = evt.target.closest('.accordion').querySelector('.accordion__button');
  const descriptionElement = clickedButton.closest('.accordion').querySelector('.accordion__description')

  if (descriptionElement && !(descriptionElement.classList.contains('accordion__description_close'))){
    descriptionElement.classList.add("accordion__description_close");
    clickedButton.classList.remove("accordion__button_close");
  }
  else if (descriptionElement && descriptionElement.classList.contains('accordion__description_close')){
    descriptionElement.classList.remove("accordion__description_close");
    clickedButton.classList.add("accordion__button_close");
  }

}






document.querySelectorAll('.accordion__button').forEach((button) => {
  button.addEventListener("click", (evt) => closeDescription(evt))
})
