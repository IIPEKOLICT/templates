import { IState } from '../interfaces';

/**
 * Base state class
 */
export default abstract class State<T> implements IState {
  protected abstract storeKey: string;
  protected abstract defaultState: T;

  /**
   * Base state class constructor
   */
  public constructor() {
    this.onInit();
  }

  /**
   * Prebuilt method for handle init state
   *
   * @protected
   */
  protected onInit(): void {
    //
  }

  /**
   * Prebuilt method for load data from LS
   *
   * @protected
   */
  protected load(): T {
    return localStorage.getItem(this.storeKey)
      ? JSON.parse(localStorage.getItem(this.storeKey) as string)
      : this.defaultState;
  }

  /**
   * Prebuilt method for save state in LS
   */
  public save(): void {
    localStorage.setItem(this.storeKey, JSON.stringify(this));
  }
}
