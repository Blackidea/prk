class PartnersSlider {
  constructor() {
    const slider = new Swiper('.jso-partners-slider', {
      loop: true,
      nextButton: '.jso-partners-slider__button_next',
      prevButton: '.jso-partners-slider__button_prev',
      slidesPerView: 3,
      spaceBetween: 20
    });
  }
}

window.XFO.parnersSlider = new PartnersSlider();
