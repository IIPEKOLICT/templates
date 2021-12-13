import Component from './component';
import { IPage, IRouter } from '../interfaces';

/**
 * Base page class
 */
export default class Page<S> extends Component implements IPage {
  protected readonly ACTIVE_CLASS = 'active';
  protected readonly PREV_CLASS = 'anim-prev';
  protected readonly NEXT_CLASS = 'anim-next';
  protected router: IRouter;
  protected store: S;

  /**
   * Page constructor
   *
   * @param router app router
   * @param store app store
   * @protected
   */
  public constructor(router: IRouter, store: S) {
    super();
    this.router = router;
    this.store = store;
  }

  /**
   * Prebuilt method for open this page
   */
  public open(): void {
    const { node, ACTIVE_CLASS, PREV_CLASS } = this;

    node.classList.add(ACTIVE_CLASS, PREV_CLASS);
    node.addEventListener('animationend', () => {
      node.classList.remove(PREV_CLASS);
    });
  }

  /**
   * Prebuilt method for close this page
   */
  public close(): void {
    const { node, NEXT_CLASS } = this;
    node.classList.add(NEXT_CLASS);
    node.addEventListener('animationend', () => node.remove());
  }
}
