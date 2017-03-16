class BuyCard {
  constructor() {
    if (!window.XFO.Popup) return;

    this.initBuyInShopPopup();
  }

  initBuyInShopPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-popup-certificates__buy-in-shop'),
      closeBtn: document.querySelector('.jso-popup-certificates__buy-in-shop-close'),
      activePopupClass: 'xfo-popup-certificates_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-buy-card__open_shop').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.buyInShopPopup = popup;
  }
}

window.XFO.buyCard = new BuyCard();
