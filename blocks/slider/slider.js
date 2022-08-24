function addSlideActionsToButtons(buttons, slideToHide, slideToShow) {
  buttons.map(button => {
    button.addEventListener('click', () => {
      slideToHide.classList.toggle('slider__item_hidden');
      slideToShow.classList.toggle('slider__item_hidden');
    });
  });
}

function addActionsToSlides(slides) {

  for (let currentIndex = 0; currentIndex < slides.length; currentIndex++) {
    let nextIndex = currentIndex == slides.length - 1 ? 0 : currentIndex + 1;
    let prevIndex = currentIndex == 0 ? slides.length - 1 : currentIndex - 1;

    let currentSlide = slides[currentIndex];
    let previousSlide = slides[prevIndex];
    let nextSlide = slides[nextIndex];

    const buttonsForward = [...currentSlide.querySelectorAll('.slider__action_type_forward')];
    addSlideActionsToButtons(buttonsForward, currentSlide, nextSlide);

    const buttonsBack = [...currentSlide.querySelectorAll('.slider__action_type_back')];
    addSlideActionsToButtons(buttonsBack, currentSlide, previousSlide);

  }
}

function addSliderFunctionalityToSection(section) {

  slider = section.querySelectorAll('.slider__items');
  if (!slider) return;
  slides = section.querySelectorAll('.slider__item');
  if (!slides) return;
  addActionsToSlides(slides);

}

const sectionsWithSlider = [...document.querySelectorAll('.slider')];
sectionsWithSlider.map(item => addSliderFunctionalityToSection(item));
