class BuyCard {
  constructor() {
    if (!window.XFO.Popup) return;

    this.initBuyInShopPopup();
    this.initBuyUnderContractPopup();
    this.initTermsPopup();
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

  initBuyUnderContractPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-popup-certificates__buy-under-contract'),
      closeBtn: document.querySelector('.jso-popup-certificates__buy-under-contract-close'),
      activePopupClass: 'xfo-popup-certificates_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-buy-card__open_contract').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.buyUnderContractPopup = popup;
  }

  initTermsPopup() {
    const popup = new window.XFO.Popup({
      popup: document.querySelector('.jso-terms-of-use-popup'),
      closeBtn: document.querySelector('.jso-terms-of-use-popup__close'),
      activePopupClass: 'xfo-terms-of-use-popup_active',
      overlay: false
    });

    const links = Array.from(document.querySelectorAll('.jso-terms-of-use__open'));

    links.forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        popup.open();
      };
    });

    this.termsPopup = popup;
  }
}

window.XFO.buyCard = new BuyCard();
