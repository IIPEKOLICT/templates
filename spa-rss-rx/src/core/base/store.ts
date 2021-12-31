/**
 * Base store class
 */
export default abstract class Store<S> {
  protected abstract defaultState: S;

  /**
   * Base store class constructor
   */
  public constructor() {
    this.onInit();
  }

  /**
   * Prebuilt method for handle init event
   *
   * @protected
   */
  protected onInit(): void {
    //
  }
}
