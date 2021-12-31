export interface IMainState {
  first: number;
  second: number;
}

export interface IMainController {
  getFirst(): number;
  getSecond(): number;
  addFirst(): void;
  addSecond(): void;
  reset(): void;
}
