export default class Carousel {
  constructor({ items, prevBtn, nextBtn, slidesToShow }) {

    this.items = items;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;

    this.current = 0;
    this.slidesToShow = slidesToShow || 0;
    this.init();
  }

  prev() {
    if (this.current === 0) {
      return;
    }

    this.current--;

    const { marginLeft, marginRight } = getComputedStyle(this.slides[this.current]);
    const itemWidth = parseInt(marginLeft, 10) + parseInt(marginRight, 10) + this.slides[this.current].offsetWidth;

    this.items.style.left = this.current * -itemWidth + 'px';
  }

  next() {
    if (this.current + 1 >= this.slidesCount - this.slidesToShow) {
      return;
    }

    this.current++;

    const { marginLeft, marginRight } = getComputedStyle(this.slides[this.current]);
    const itemWidth = parseInt(marginLeft, 10) + parseInt(marginRight, 10) + this.slides[this.current].offsetWidth;

    this.items.style.left = this.current * -itemWidth + 'px';
  }

  onPrevBtnClick(e) {
    e.preventDefault();

    this.prev();
  }

  onNextBtnClick(e) {
    e.preventDefault();

    this.next();
  }

  init() {
    this.prevBtn.addEventListener('click', this.onPrevBtnClick.bind(this));
    this.nextBtn.addEventListener('click', this.onNextBtnClick.bind(this));

    this.slides = this.items.children;
    this.slidesCount = this.slides.length;
  }
}
