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

  get width() {
    return this.element.offsetWidth;
  }

  set width(value) {
    this.element.style.width = isNaN(value) ? value : `${value}px`;
  }

  append() {
    document.body.appendChild(this.element);
    return this;
  }
}