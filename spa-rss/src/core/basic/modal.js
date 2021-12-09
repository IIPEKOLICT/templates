import Page from './page';

/**
 * Base modal class
 */
export default class Modal extends Page {
  static basicDelay = 500;

  /**
   * Method for open this modal
   */
  open() {
    this.node.classList.add(Modal.stateClasses.active);
  }

  /**
   * Method for close this modal
   */
  close() {
    this.node.classList.remove(Modal.stateClasses.active);
    setTimeout(() => this.node.remove(), Modal.basicDelay);
  }
}
