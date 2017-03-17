class Popup {
  /**
   * Represents a popup
   *
   * @constructor
   * @param overlay {HTMLElement, undefined}
   * @param popup {HTMLElement, undefined}
   * @param closeBtn  {HTMLElement, undefined}
   * @param activePopupClass {string}
   * @param activeOverlayClass {string}
   */
  constructor({ overlay, popup, closeBtn, activePopupClass, activeOverlayClass }) {
    this._setOverlayElement(overlay);
    this._setPopupElement(popup);
    this._setCloseButtonElement(closeBtn);
    this._setActiveOverlayClassName(activeOverlayClass);
    this._setActivePopupClassName(activePopupClass);
  }

  /**
   * Removes unnecessary spaces and dot from className
   *
   * @param className
   * @returns {string}
   * @private
   */
  _normalizeClassName(className) {
    const cn = className.trim();
    return cn[0] === '.' ? cn.substr(1, cn.length) : cn;
  }

  /**
   * Sets className which mark popup as active (visible)
   *
   * @param className
   * @private
   */
  _setActivePopupClassName(className) {
    if (typeof className !== 'string') {
      throw new Error('Expected activePopupClass to be a string');
    }

    this.activePopupClassName = this._normalizeClassName(className);
  }

  /**
   * Sets className which mark overlay as active (visible)
   *
   * @param className
   * @private
   */
  _setActiveOverlayClassName(className) {
    if (typeof className !== 'string') {
      throw new Error('Expected activeOverlayClass to be a string');
    }

    this.activeOverlayClassName = this._normalizeClassName(className);
  }

  /**
   * @param el {HTMLElement}
   * @private
   * @throws {InvalidArgumentException}
   */
  _setOverlayElement(el) {
    if (!el.nodeType || el.nodeType !== 1) {
      throw new Error(`Expected 'overlay' to be an HTMLElement`);
    }

    this.overlay = el;
  }

  /**
   * @param el {HTMLElement}
   * @private
   * @throws {InvalidArgumentException}
   */
  _setPopupElement(el) {
    if (!el.nodeType || el.nodeType !== 1) {
      throw new Error(`Expected 'popup' to be an HTMLElement`);
    }

    this.popup = el;
  }

  /**
   * @param el {HTMLElement}
   * @private
   * @throws {InvalidArgumentException}
   */
  _setCloseButtonElement(el) {
    if (!el.nodeType || el.nodeType !== 1) {
      throw new Error(`Expected 'closeBtn' to be an HTMLElement`);
    }

    this.closeBtn = el;
  }

  /**
   * @returns {boolean}
   * @private
   */
  _isOverlayActive() {
    return this.overlay.classList.contains(this.activeOverlayClassName);
  }

  /**
   * @returns {boolean}
   * @private
   */
  _isPopupActive() {
    return this.popup.classList.contains(this.activePopupClassName);
  }

  /**
   * If overlay isn't active, then adds [activeOverlayClassName] to it
   * @private
   */
  _showOverlay() {
    if (this._isOverlayActive()) return;

    this.overlay.classList.add(this.activeOverlayClassName);
  }

  /**
   * If overlay is active, then removes [activeOVerlayClassName] from it
   * @private
   */
  _hideOverlay() {
    if (!this._isOverlayActive()) return;

    this.overlay.classList.remove(this.activeOverlayClassName);
  }

  /**
   * If popup isn't active, then adds [activePopupClassName] to it
   * @private
   */
  _showPopup() {
    if (this._isPopupActive()) return;

    this.popup.classList.add(this.activePopupClassName);
  }

  /**
   * If popup is active, then removes [activeOVerlayClassName] from it
   * @private
   */
  _hidePopup() {
    if (!this._isPopupActive()) return;

    this.popup.classList.remove(this.activePopupClassName);
  }

  /**
   * It will be called just after [open] method
   *
   * @param callback
   * @throws {InvalidArgumentException}
   */
  onOpen(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected callback to be a function');
    }

    this._onOpen = callback;
  }

  /**
   * Shows popup and overlay
   */
  open() {
    this._showOverlay();
    this._showPopup();


    this._boundOnClickHandler = this._onClickHandler.bind(this);
    this.overlay.addEventListener('click', this._boundOnClickHandler);
    this.closeBtn.addEventListener('click', this._boundOnClickHandler);

    if (!this._onOpen) return;

    if (!this._isOverlayActive() || !this._isPopupActive()) {
      return console.warn(`Something went wrong, overlay or popup was'snt opened, so onOpen method won't be called`);
    }


    this._onOpen();
  }

  /**
   * Hides popup and overlay
   */
  close() {
    this._hideOverlay();
    this._hidePopup();

    if (!this._onClose) return;

    if (this._isOverlayActive() || this._isPopupActive()) {
      return console.warn(`Something went wrong, overlay or popup was'snt closed, so onClose method won't be called`);
    }

    this._onClose();
  }

  /**
   * It will be called just after [close] method
   *
   * @param callback
   * @throws {InvalidArgumentException}
   */
  onClose(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected callback to be a function');
    }

    this._onClose = callback;
  }

  /**
   * If click was outside popup (on overlay), then hide popup
   *
   * @param event {MouseEvent}
   */
  _onClickHandler(event) {
    const isOverlay = event.target === this.overlay;
    const isCloseBtn = event.target === this.closeBtn;

    console.log(isOverlay, isCloseBtn);
    console.log(event.target);
    if (isOverlay || isCloseBtn) {
      this.close();
    }

    // if popup was closed, then remove event listener from overlay (click outside popup)
    if (!this._isOverlayActive() || !this._isPopupActive()) {
      this.overlay.removeEventListener('click', this._boundOnClickHandler);
      this.closeBtn.removeEventListener('click', this._boundOnClickHandler);
    }
  }
}

window.XFO.Popup = Popup;
