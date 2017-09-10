/**
 * Box Class
 */
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

  /**
   * Returns the width of the box
   */
  get width() {
    return `${(this.container.width / this.container.boxesPerRow) - this.offset}px`;
  }

  /**
   * Returns the height of the box
   */
  get height() {
    return `${((this.container.width / this.container.boxesPerRow) - this.offset) * 0.75}px`;
  }

  /**
   * Appends the box to an element
   */
  append() {
    this.container.element.appendChild(this.element);
  }
}
