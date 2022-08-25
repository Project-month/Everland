function addSlideActionsToButtons(buttons, slidesToToggle) {
  buttons.map(button => {
    button.addEventListener('click', () => slidesToToggle.forEach(slide => slide.classList.toggle('slider__item_hidden')));
  });
}

function addActionsToSlides(slides) {

  slides.forEach((currentSlide, index, allSlides) => {
    previousSlide = allSlides[index ==  0 ? allSlides.length - 1 : index + 1];
    nextSlide = allSlides[index == allSlides.length - 1 ? 0 : index + 1];

    addSlideActionsToButtons([...currentSlide.querySelectorAll('.slider__action_type_forward')], [currentSlide, nextSlide]);
    addSlideActionsToButtons([...currentSlide.querySelectorAll('.slider__action_type_back')], [currentSlide, previousSlide]);
    
  });
}

function addSliderFunctionalityToSection(section) {

  slider = section.querySelectorAll('.slider__items');
  slides = section.querySelectorAll('.slider__item');
  
  if (!slider || !slides) return;
  
  addActionsToSlides(slides);

}

const sectionsWithSlider = [...document.querySelectorAll('.slider')];
sectionsWithSlider.map(item => addSliderFunctionalityToSection(item));
