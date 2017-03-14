export default class Popup {
  constructor() {
    this.popup =  document.querySelector('.jso-popup');
    this.closeBtn = document.querySelector('.jso-popup__close');
    this.activeClass = 'xfo-popup_active';

    if (!this.popup || !this.closeBtn) {
      return;
    }

    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.close();
    });
  }

  open() {
    this.popup.classList.add(this.activeClass);
  }

  close() {
    this.popup.classList.remove(this.activeClass);
  }
}
