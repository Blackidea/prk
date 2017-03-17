class BannerSlider {
  constructor() {
    const slider = new Swiper('.jso-banner-slider', {
      loop: true,
      nextButton: '.jso-banner-slider__button_next',
      prevButton: '.jso-banner-slider__button_prev',
      slidesPerView: 1,
      pagination: '.jso-banner-slider__pagination',
      spaceBetween: 0,
      bulletClass: 'xfo-banner-slider__pagination-item',
      bulletActiveClass: 'xfo-banner-slider__pagination-item_active',
      paginationClickableClass: 'xfo-banner-slider__pagination-item',
      paginationClickable: true,
      paginationBulletRender: (swiper, i, cn) => `<li class="${cn}"></li>`
    });
  }
}

window.XFO.bannerSlider = new BannerSlider();
