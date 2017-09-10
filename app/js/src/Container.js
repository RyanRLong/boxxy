/**
 * Container class
 */
class Container extends Element {
  constructor(boxesPerRow = 10, width = "20%") {
    super();
    this.defaultStyles = {
      position: "absolute",
      top: "0px",
      right: "0px",
      height: "100%",
      opacity: 1,
      width
    };
    this.defaultAttributes = {
      id: "boxxyContainer"
    };
    this.boxesPerRow = boxesPerRow;
    this.width = width;
    this
      .setStyles(this.defaultStyles)
      .setAttributes(this.defaultAttributes)
      .append();
  }

  /**
   * Returns the width of the container
   */
  get width() {
    return this.element.offsetWidth;
  }

  /**
   * Sets the width of the containerin pixels or percentage
   * @param  {string or Number} value 
   */
  set width(value) {
    this.element.style.width = isNaN(value) ? value : `${value}px`;
  }

  /**
   * Appends the container to an element
   */
  append() {
    document.body.appendChild(this.element);
    return this;
  }
}