import { IObserver, ISubject } from '../interfaces';

export default class Controller implements ISubject {
  public observers: IObserver[] = [];

  public subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: IObserver): void {
    this.observers.filter((obs: IObserver) => obs !== observer);
  }

  public notify(): void {
    this.observers.forEach((observer: IObserver) => observer.update());
  }
}
