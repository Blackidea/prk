class BuyCard {
  constructor() {
    if (!window.XFO.Popup) return;

    this.initPaymentPopup();
    this.initDebitPopup();
    this.initCreditPopup();
  }

  initPaymentPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-bank-cards-popup-payment'),
      closeBtn: document.querySelector('.jso-bank-cards-popup-payment__close'),
      activePopupClass: 'xfo-bank-cards-popup_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-bank-cards__card-button_payment').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.paymentPopup = popup;
  }

  initDebitPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-bank-cards-popup-debit'),
      closeBtn: document.querySelector('.jso-bank-cards-popup-debit__close'),
      activePopupClass: 'xfo-bank-cards-popup_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-bank-cards__card-button_debit').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.debitPopup = popup;
  }

  initCreditPopup() {
    const popup = new window.XFO.Popup({
      overlay: document.querySelector('.jso-popup-overlay'),
      popup: document.querySelector('.jso-bank-cards-popup-credit'),
      closeBtn: document.querySelector('.jso-bank-cards-popup-credit__close'),
      activePopupClass: 'xfo-bank-cards-popup_active',
      activeOverlayClass: 'xfo-popup-overlay_active'
    });

    document.querySelector('.jso-bank-cards__card-button_credit').onclick = (e) => {
      e.preventDefault();
      popup.open();
    };

    this.creditPopup = popup;
  }
}

window.XFO.buyCard = new BuyCard();
