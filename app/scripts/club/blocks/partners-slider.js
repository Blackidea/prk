import Carousel from './carousel';

export default class PartnersSlider {
  constructor() {
    const slider = new Carousel({
      items: document.querySelector('.jso-partners-slider__items'),
      prevBtn: document.querySelector('.jso-partners-slider__button_prev'),
      nextBtn: document.querySelector('.jso-partners-slider__button_next'),
      currentText: document.querySelector('.jso-partners-slider__slides_current'),
      totalText: document.querySelector('.jso-partners-slider__slides_count')
    });
  }
}
