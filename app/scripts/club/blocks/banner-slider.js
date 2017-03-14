import Carousel from './carousel';

export default class BannerSlider {
  constructor() {
    const slider = new Carousel({
      items: document.querySelector('.jso-banner-slider__items'),
      prevBtn: document.querySelector('.jso-banner-slider__button_prev'),
      nextBtn: document.querySelector('.jso-banner-slider__button_next'),
      dotsContainer: document.querySelector('.jso-banner-slider__dots'),
      dotItemClass: 'xfo-banner-slider__dot',
      dotActiveItemClass: 'xfo-banner-slider__dot_active'
    });
  }
}
