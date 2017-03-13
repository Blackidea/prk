import Carousel from './carousel';

export default class PartnerSlider {
  constructor() {
    const slider = new Carousel({
      items: document.querySelector('.jso-partners-slider__items'),
      prevBtn: document.querySelector('.jso-partners-slider__button_prev'),
      nextBtn: document.querySelector('.jso-partners-slider__button_next'),
      slidesToShow: 3
    });
  }
}
