import Header from '../blocks/header';
import BannerSlider from '../blocks/banner-slider';
import PartnersSlider from '../blocks/partners-slider';

if (!window.XFO) {
  window.XFO = {};
}

XFO.header = new Header();
// XFO.bannerSlider = new BannerSlider();
XFO.partnersSlider = new PartnersSlider();
