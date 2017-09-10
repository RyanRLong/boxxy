/**
 * Element class
 */
class Element {
  constructor() {
    this.element = document.createElement("div");
  }

  /**
   * Set the elements styles
   * @param {object} styles css like styles object
   */
  setStyles(styles) {
    Object.assign(this.element.style, styles);
    return this;
  }

  /**
   * Sets an elements attributes
   * @param {object} attributes attributes like object
   */
  setAttributes(attributes) {
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        this.element.setAttribute(key, attributes[key]);
      }
    }
    return this;
  }

  /**
   * Sets the classes of an element
   * @param {array} classes 
   */
  setClasses(classes) {
    this.element.classList.add(...classes);
    return this;
  }
}
