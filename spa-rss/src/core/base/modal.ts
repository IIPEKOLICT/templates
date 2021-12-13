import Page from './page';

/**
 * Base modal class
 */
export default class Modal<S> extends Page<S> {
  private readonly BASIC_DELAY = 100;

  /**
   * Prebuilt method for open this modal
   */
  open() {
    this.node.classList.add(this.ACTIVE_CLASS);
  }

  /**
   * Prebuilt method for close this modal
   */
  close() {
    this.node.classList.remove(this.ACTIVE_CLASS);
    setTimeout(() => this.node.remove(), this.BASIC_DELAY);
  }
}
