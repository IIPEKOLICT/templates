import { AppConfig, PageClass, Pages } from '../types';
import { IApplication, IPage, IRouter } from '../interfaces';
import Router from './router';
import { render } from '../helpers';
import { BASE_DELAY } from '../constants';

/**
 * Base application class
 */
export default abstract class Application<S> implements IApplication {
  protected readonly rootContainer: HTMLElement;
  protected readonly pages: Pages<S>;
  protected readonly modals: Pages<S>;
  protected readonly router: IRouter;
  private currentPage: IPage;
  private prevPage: IPage | null;
  private currentModal: IPage | null;

  /**
   * Application class constructor
   *
   * @param appConfig app configuration object
   * @param store app store object
   */
  public constructor(appConfig: AppConfig<S>, protected readonly context: S) {
    this.rootContainer = appConfig.root;
    this.pages = appConfig.pages;
    this.modals = appConfig.modals;

    this.router = new Router(
      (id: string) => this.openPage(id),
      (id: string) => this.openModal(id),
      appConfig.root
    );
    this.context = context;

    this.currentPage = this.initComponent(appConfig.entry);
    this.prevPage = null;
    this.currentModal = null;

    this.onInit();
  }

  /**
   * Prebuilt method for add logic when app starts
   *
   * @protected
   */
  protected onInit(): void {
    //
  }

  /**
   * Prebuilt method for build component
   *
   * @param Component Component class
   * @protected
   */
  protected initComponent(Component: PageClass<S>): IPage {
    return new Component(this.router, this.context);
  }

  /**
   * Method for show current page
   */
  public bootstrap(): void {
    this.rootContainer.append(render(this.currentPage));
  }

  /**
   * Method for open page
   *
   * @param id {string} page id from app config
   * @protected
   */
  protected openPage(id: string): void {
    if (Object.keys(this.pages).indexOf(id) !== -1) {
      window.scrollTo({ top: 0 });
      this.prevPage = this.currentPage;
      this.currentPage = this.initComponent(this.pages[id]);
      this.bootstrap();

      this.prevPage.close();
      this.currentPage.open();
    }
  }

  /**
   * Method for open modal
   *
   * @param id {string} modal id from app config
   * @protected
   */
  protected openModal(id: string): void {
    if (Object.keys(this.modals).indexOf(id) !== -1) {
      this.currentModal = this.initComponent(this.modals[id]);
      this.rootContainer.append(render(this.currentModal));
      setTimeout(() => this.currentModal?.open(), BASE_DELAY);
    }
  }
}
