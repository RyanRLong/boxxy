class Element {
  constructor() {
    this.element = document.createElement("div");
  }

  setStyles(styles) {
    Object.assign(this.element.style, styles);
    return this;
  }

  setAttributes(attributes) {
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        this.element.setAttribute(key, attributes[key]);
      }
    }
    return this;
  }

  setClasses(classes) {
    this.element.classList.add(...classes);
    return this;
  }
}
