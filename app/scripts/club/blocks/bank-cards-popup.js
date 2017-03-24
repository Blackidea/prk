class BankCardsPopup {
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

    // калькуляторы
    const minValue = 0;
    const maxValue = 99999;

    const perekrestokField = $('.jso-bank-cards-popup__calc-field_perekrestok');
    const perekrestokSlider = $('.jso-bank-cards-popup__calc-range-field_perekrestok');

    perekrestokField.on('input', () => {
      let nextValue;
      const value = perekrestokField.val().replace(/[^\d]/g, '');

      if (value <= minValue) {
        nextValue = minValue;
      }

      if (value >= maxValue) {
        nextValue = maxValue;
      }

      if (typeof nextValue === 'undefined') {
        nextValue = value;
      }

      perekrestokField.val(nextValue || '');
      perekrestokSlider.slider('option', 'value', nextValue);
    });

    perekrestokSlider.slider({
      value: parseInt(perekrestokField.val().replace(' ', ''), 10) || 0,
      range: 'min',
      min: 0,
      max: 99999,
      slide(e, { value }) {
        perekrestokField.val(value);
      }
    });

    const othersField = $('.jso-bank-cards-popup__calc-field_others');
    const othersSlider = $('.jso-bank-cards-popup__calc-range-field_others');

    othersField.on('input', () => {
      let nextValue;
      const value = othersField.val().replace(/[^\d]/g, '');

      if (value <= minValue) {
        nextValue = minValue;
      }

      if (value >= maxValue) {
        nextValue = maxValue;
      }

      if (typeof nextValue === 'undefined') {
        nextValue = value;
      }

      othersField.val(nextValue || '');
      othersSlider.slider('option', 'value', nextValue);
    });

    othersSlider.slider({
      value: parseInt(othersField.val().replace(' ', ''), 10) || 0,
      range: 'min',
      min: 0,
      max: 99999,
      slide(e, { value }) {
        othersField.val(value);
      }
    });
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

window.XFO.bankCardsPopup = new BankCardsPopup();
