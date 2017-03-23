// Инициализация глобального объекта XFO
if (!(window.XFO instanceof Object)) {
  window.XFO = {};
}

//= ../../../../bower_components/jquery/dist/jquery.min.js
//= ../../../../bower_components/swiper/dist/js/swiper.js

const bannerSlider = new Swiper('.jso-banner-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: 2000
});

//= ../blocks/popup.js
//= ../blocks/buy-card.js

//= ../../../../bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js
$("input[type='tel']").inputmask("+7 (999) 999-99-99");
