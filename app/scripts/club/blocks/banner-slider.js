class BannerSlider {
  constructor() {
    const slider = new window.XFO.Carousel({
      items: document.querySelector('.jso-banner-slider__items'),
      prevBtn: document.querySelector('.jso-banner-slider__button_prev'),
      nextBtn: document.querySelector('.jso-banner-slider__button_next'),
      dotsContainer: document.querySelector('.jso-banner-slider__dots'),
      dotItemClass: 'xfo-banner-slider__dot',
      dotActiveItemClass: 'xfo-banner-slider__dot_active'
    });
  }
}

window.XFO.bannerSlider = new BannerSlider();
