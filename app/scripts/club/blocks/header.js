class Header {

  constructor() {
    this.catalogBtn();
  }

  /**
   * Show catalog content on hover
   */
  catalogBtn() {
    const catalog = document.querySelector('.jso-header__catalog');
    const content = document.querySelector('.jso-header__catalog-content');
    const activeClass = 'xfo-header__catalog-content_active';

    if (!catalog || !content) {
      return false;
    }

    const onMouseOver = () => {
      content.classList.add(activeClass);
      catalog.addEventListener('mouseout', onMouseOut);
    };

    const onMouseOut = () => {
      content.classList.remove(activeClass);
      content.removeEventListener('mouseout', onMouseOut);
    };

    catalog.addEventListener('mouseover', onMouseOver);
  }
}

window.XFO.header = new Header();
