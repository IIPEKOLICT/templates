import { useHtml } from '../hooks';

/**
 * Base component class
 */
export default class Component {
  /**
   * Component constructor
   *
   * @param template {string} HTML template for component
   * @param openPage {function} Func for openPage
   * @param openModal {function} Func for openModal
   */
  constructor(template, openPage = () => null, openModal = () => null) {
    this.template = template;
    this.openPage = openPage;
    this.openModal = openModal;
    this.node = document.createElement('div');
    this.defaultVars = {};
  }

  /**
   * Prebuilt method for declare template vars for component
   * Should return object
   *
   * @returns {object}
   */
  vars() {
    return this.defaultVars;
  }

  /**
   * Method for compile component Node
   * Throws Error if template not specified
   *
   * @returns {ChildNode|*}
   */
  compileTemplate() {
    if (!this.template)
      throw new Error(`Template for ${this.constructor.name} exists`);

    return useHtml(this.template, this.vars());
  }

  /**
   * Prebuilt method for bind elements from component Node
   */
  findElements() {
    this.root = this.node;
  }

  /**
   * Prebuilt method for inject other components|manipulate component DOM
   */
  changeDOM() {
    this.node.append();
  }

  /**
   * Prebuilt method for add event handlers to component
   */
  handleEvents() {
    this.node.addEventListener('click', null);
  }

  /**
   * Method for render component
   *
   * @returns {HTMLDivElement|HTMLElement}
   */
  render() {
    this.node = this.compileTemplate();
    this.findElements();
    this.changeDOM();
    this.handleEvents();
    return this.node;
  }
}
