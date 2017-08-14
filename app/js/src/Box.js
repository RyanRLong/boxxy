class Box extends Element {
  constructor(container, color) {
    super();
    this.container = container;
    this.color = color;
    this.offset = 4;
    this.defaultStyles = {
      height: this.height,
      width: this.width
    };
    this
      .setStyles({
        height: this.height,
        width: this.width
      })
      .setClasses(['box', this.color, 'enter'])
      .append();
  }

  get width() {
    return `${(this.container.width / this.container.boxesPerRow) - this.offset}px`;
  }

  get height() {
    return `${((this.container.width / this.container.boxesPerRow) - this.offset) * 0.75}px`;
  }

  append() {
    this.container.element.appendChild(this.element);
  }
}
