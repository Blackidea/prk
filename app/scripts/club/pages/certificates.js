// Инициализация глобального объекта XFO
if (!(window.XFO instanceof Object)) {
  window.XFO = {};
}

//= ../../../../bower_components/swiper/dist/js/swiper.js
const bannerSlider = new Swiper('.jso-banner-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: 2000
});

//= ../blocks/popup.js
//= ../blocks/buy-card.js
