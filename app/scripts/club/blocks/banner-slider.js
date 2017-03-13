import Carousel from './carousel';

export default class BannerSlider {
  constructor() {
    const slider = new Carousel({
      items: document.querySelector('.jso-banner-slider__items'),
      prevBtn: document.querySelector('.jso-banner-slider__button_prev'),
      nextBtn: document.querySelector('.jso-banner-slider__button_next')
    });
  }
}
