import Header from '../blocks/header';
import BannerSlider from '../blocks/banner-slider';

if (!window.XFO) {
  window.XFO = {};
}

XFO.header = new Header();
XFO.bannerSlider = new BannerSlider();
