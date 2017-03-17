class PartnersSlider {
  constructor() {
    const slider = new Swiper('.jso-partners-slider', {
      loop: true,
      nextButton: '.jso-partners-slider__button_next',
      prevButton: '.jso-partners-slider__button_prev',
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        999: {
          slidesPerView: 1,
          pagination: '.jso-partners-slider__pagination',
          paginationType: 'fraction'
        }
      }
    });
  }
}

window.XFO.parnersSlider = new PartnersSlider();
