import { IPage, IRouter } from './interfaces';

export type HTMLTemplateVars = {
  [property: string]: string | number | boolean;
};

export type CssVars = {
  [property: string]: string;
};

// export type Pages = {
//   [property: string]: typeof Page;
// };
//
// export type Modals = {
//   [property: string]: typeof Modal;
// };

// export type AppConfig = {
//   root: HTMLElement;
//   entry: typeof Page;
//   pages: Pages;
//   modals: Modals;
// };

export type PageClass<S> = new (router: IRouter, store: S) => IPage;

export type Pages<S> = {
  [property: string]: PageClass<S>;
};

export type AppConfig<S> = {
  root: HTMLElement;
  entry: PageClass<S>;
  pages: Pages<S>;
  modals: Pages<S>;
};

export type ComponentParams = {
  template: string;
};

export type Action<T, P> = {
  type: T;
  payload: P;
};
