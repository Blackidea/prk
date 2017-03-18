class CalcPointsPopup {
  constructor() {
    if (!window.XFO.Popup) return;

    this.initPopup();
  }

  initPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-calc-points-popup'),
      closeBtn: document.querySelector('.jso-calc-points-popup__close'),
      activePopupClass: 'xfo-calc-points-popup_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-partners__calc').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.popup = popup;
  }

}

window.XFO.buyCard = new CalcPointsPopup();
