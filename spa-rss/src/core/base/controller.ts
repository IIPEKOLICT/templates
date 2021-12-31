import { IObserver, IStream } from '../interfaces';

/**
 * Base controller class
 */
export default abstract class Controller<S> implements IStream {
  protected abstract state: S;
  protected observers: IObserver[] = [];

  /**
   * Prebuilt method for subscribe observer
   *
   * @param observer {IObserver} Observer component
   */
  public subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }

  /**
   * Prebuilt method for unsubscribe observer component
   *
   * @param observer {IObserver} Observer component
   */
  public unsubscribe(observer: IObserver): void {
    this.observers.filter((obs: IObserver) => obs !== observer);
  }

  /**
   * Prebuilt method for notify observers
   */
  public notify(actions?: string[]): void {
    this.observers.forEach((observer: IObserver) =>
      actions
        ? [...actions, ''].forEach((action) => observer.update(action))
        : observer.update()
    );
  }
}
