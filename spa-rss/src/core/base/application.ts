import { AppConfig, PageClass, Pages } from '../types';
import { IApplication, IPage, IRouter } from '../interfaces';
import Router from './router';
import { render } from '../helpers';

export default abstract class Application<S> implements IApplication {
  private readonly BASIC_DELAY = 100;
  private readonly ROOT_CONTAINER: HTMLElement;
  private readonly PAGES: Pages<S>;
  private readonly MODALS: Pages<S>;
  private readonly STORE: S;
  private readonly ROUTER: IRouter;
  private currentPage: IPage;
  private prevPage: IPage | null;
  private currentModal: IPage | null;

  public constructor(appConfig: AppConfig<S>, store: S) {
    this.ROOT_CONTAINER = appConfig.root;
    this.PAGES = appConfig.pages;
    this.MODALS = appConfig.modals;

    this.ROUTER = new Router(
      (id: string) => this.openPage(id),
      (id: string) => this.openModal(id)
    );
    this.STORE = store;

    this.currentPage = this.initComponent(appConfig.entry);
    this.prevPage = null;
    this.currentModal = null;
  }

  protected initComponent(Component: PageClass<S>): IPage {
    return new Component(this.ROUTER, this.STORE);
  }

  public bootstrap(): void {
    this.ROOT_CONTAINER.append(render(this.currentPage));
  }

  protected openPage(id: string): void {
    if (Object.keys(this.PAGES).indexOf(id) !== -1) {
      window.scrollTo({ top: 0 });
      this.prevPage = this.currentPage;
      this.currentPage = this.initComponent(this.PAGES[id]);
      this.bootstrap();

      this.prevPage.close();
      this.currentPage.open();
    }
  }

  protected openModal(id: string): void {
    if (Object.keys(this.MODALS).indexOf(id) !== -1) {
      this.currentModal = this.initComponent(this.MODALS[id]);
      this.ROOT_CONTAINER.append(render(this.currentModal));
      setTimeout(() => this.currentModal?.open(), this.BASIC_DELAY);
    }
  }
}
