class Cards {
  constructor() {
    if (!window.XFO.Popup) return;

    this.popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-about-cards-popup'),
      closeBtn: document.querySelector('.jso-about-cards-popup__close'),
      activePopupClass: 'xfo-about-cards-popup_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-cards').addEventListener('click', this.onReadMoreClicK.bind(this));
  }

  onReadMoreClicK(e) {
    if (!e.target.classList.contains('jso-cards__read-more')) {
      return false;
    }

    e.preventDefault();
    this.popup.open();
  }
}

window.XFO.aboutCardPopup = new Cards();