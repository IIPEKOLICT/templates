export interface IApplication {
  bootstrap(): void;
}

export interface IRouter {
  openPage(id: string): void;
  openModal(id: string): void;
  getRootContainer(): HTMLElement;
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
  update(action?: string): void;
  onDestroy(): void;
}

export interface IStream {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(actions?: string[]): void;
}

export interface IState {
  save(): void;
}
