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

    // Handle checkboxes (choose certificate)
    const checkboxes = Array.from(document.querySelectorAll('.jso-popup-certificates__field_checkbox_choose'));

    for (let checkbox of checkboxes) {
      const field = checkbox.parentNode.parentNode.nextElementSibling;
      if (!field) continue;

      // init field state
      field.disabled = !checkbox.checked;

      // change field state
      checkbox.onchange = () => {
        field.disabled = !checkbox.checked;
      }
    }

    // Handle uploading files
    const fileInputs = Array.from(document.querySelectorAll('.jso-popup-certificates__file-input'));

    for (let fileInput of fileInputs) {
      const fieldContainer = fileInput.parentNode.previousElementSibling;
      if (!fieldContainer) return;

      const fileContainer = fieldContainer.parentNode;
      const field = fieldContainer.children[0];

      if (!field) return;

      const fieldRemove = fieldContainer.children[1];
      if (!fieldRemove) return;

      fieldRemove.onclick = (e) => {
        e.preventDefault();
        fileContainer.classList.remove('xfo-popup-certificates__file_uploaded');
        field.innerText = '';
        // reset file
        fileInput.type = 'text';
        fileInput.type = 'file';
      };

      fileInput.oninput = (e) => {
        fileContainer.classList.add('xfo-popup-certificates__file_uploaded');
        field.innerText = fileInput.files[0].name;
      }
    }
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
