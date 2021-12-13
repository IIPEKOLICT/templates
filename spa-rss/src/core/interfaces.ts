export interface IApplication {
  bootstrap(): void;
}

export interface IRouter {
  openPage(id: string): void;
  openModal(id: string): void;
}

export interface IComponent {
  template: string;
  render(): HTMLElement;
}

export interface IPage extends IComponent {
  open(): void;
  close(): void;
}

export interface IObserver {
  update(): void;
}

export interface ISubject {
  observers: IObserver[];
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(): void;
}
