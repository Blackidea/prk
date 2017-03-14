export default class Carousel {
  constructor({ items, prevBtn, nextBtn, slidesToShow, currentText, totalText, dotsContainer, dotItemClass, dotActiveItemClass }) {

    this.items = items;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.currentText = currentText;
    this.totalText = totalText;
    this.dotsContainer = dotsContainer;
    this.dotItemClass = dotItemClass;
    this.dotActiveItemClass = dotActiveItemClass;

    this.current = 0;
    this.slidesToShow = slidesToShow || 0;
    this.init();
  }

  prev() {
    let current = this.current;

    if (this.current <= 0) {
      current = this.slidesCount - this.slidesToShow;
    } else {
      current = current - 1;
    }

    this.set(current);
  }

  next() {
    let current = this.current;

    if (current >= this.slidesCount - this.slidesToShow) {
      current = 0;
    } else {
      current = current + 1;
    }

    this.set(current);
  }

  set(c) {
    const current = Number(c);
    if (this.current > this.slidesCount - this.slidesToShow) {
      this.current = this.slidesCount - this.slidesToShow;
    }

    if (this.current < 0) {
      this.current = 0;
    }

    this.current = current;
    const nextPos = this.current * -this.outerWidth(this.slides[this.current]);
    this.items.style.transform = `translate3d(${nextPos}px, 0, 0)`;
    this.writeInfo();
  }

  onPrevBtnClick(e) {
    e.preventDefault();

    this.prev();
  }

  onNextBtnClick(e) {
    e.preventDefault();

    this.next();
  }

  outerWidth(el) {
    if (!(el instanceof HTMLElement)) {
      return false;
    }

    const { marginLeft, marginRight } = getComputedStyle(el);
    return el.offsetWidth + parseInt(marginLeft, 10) + parseInt(marginRight, 10);
  }

  writeInfo() {
    if (this.totalText instanceof HTMLElement && this.currentText instanceof HTMLElement) {
      this.totalText.innerHTML = this.slides.length;
      this.currentText.innerHTML = this.current + 1;
    }
  }

  makeDots() {
    if (!(this.dotsContainer instanceof HTMLElement) || !this.dotItemClass || !this.dotItemClass) {
      return;
    }

    this.dotsContainer.innerHTML = '';

    for (let i = 0; i < this.slidesCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add(this.dotItemClass);

      if (i === 0) {
        dot.classList.add(this.dotActiveItemClass);
      }

      dot.dataset.slide = i;
      this.dotsContainer.appendChild(dot);
    }

    this.dotsContainer.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.classList.contains(this.dotItemClass) && !e.target.classList.contains(this.dotActiveItemClass)) {
        this.set(e.target.dataset.slide);

        Array.from(this.dotsContainer.children).forEach(el => {
          el.classList.remove(this.dotActiveItemClass);
        });

        e.target.classList.add(this.dotActiveItemClass);
      }
    });
  }

  init() {
    if (this.prevBtn instanceof HTMLElement && this.nextBtn instanceof HTMLElement) {
      this.prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
      this.nextBtn.addEventListener('click', this.onNextBtnClick.bind(this));
    }

    this.slides = this.items.children;
    this.slidesCount = this.slides.length;

    if (this.items.offsetWidth > this.slides[0].offsetWidth) {
      const totalWidth = Array.from(this.slides)
        .map(el => this.outerWidth(el))
        .reduce((a, b) => a + b, 0);

      this.slidesToShow = Math.round(totalWidth / this.items.offsetWidth);

    } else {
      this.slidesToShow = 1;
    }

    this.writeInfo();
    this.makeDots();
  }
}
