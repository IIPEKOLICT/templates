import Page from './page';
import { BASE_DELAY } from '../constants';

/**
 * Base modal class
 */
export default abstract class Modal<S> extends Page<S> {
  /**
   * Prebuilt method for open this modal
   */
  open() {
    this.node.classList.add(this.activeClass);
  }

  /**
   * Prebuilt method for close this modal
   */
  close() {
    this.node.classList.remove(this.activeClass);
    setTimeout(() => this.node.remove(), BASE_DELAY);
  }
}
