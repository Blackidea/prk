import Popup from './popup';

export default class Cards {
  constructor() {
    this.btns = Array.from(document.querySelectorAll('.jso-cards__read-more'));

    if (this.btns.length === 0) {
      return;
    }

    this.popup = new Popup();

    this.btns.forEach(btn => {
      btn.addEventListener('click', this.onClick.bind(this));
    });
  }

  onClick(e) {
    e.preventDefault();
    this.popup.open();
  }
}
