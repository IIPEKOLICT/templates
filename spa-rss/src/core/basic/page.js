import Component from './component';

/**
 * Base page class
 */
export default class Page extends Component {
  static stateClasses = {
    active: 'active',
    previous: 'prev-anim',
    next: 'next-anim',
  };

  /**
   * Page class constructor
   *
   * @param template {string} Page html template
   * @param store {object} Store object injected from App
   * @param openPage {function} Function to open page injected from App
   * @param openModal {function} Function to open modal injected from App
   */
  constructor(template, store, openPage, openModal) {
    super(template, openPage, openModal);
    this.store = store;
  }

  /**
   * Method for open this page
   */
  open() {
    const { node } = this;

    node.classList.add(Page.stateClasses.active, Page.stateClasses.previous);
    node.addEventListener('animationend', () => {
      node.classList.remove(Page.stateClasses.previous);
    });
  }

  /**
   * Method for close this page
   */
  close() {
    const { node } = this;

    node.classList.add(Page.stateClasses.next);
    node.addEventListener('animationend', () => node.remove());
  }
}
