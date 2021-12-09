import { render } from '../utils';

/**
 * Base application class
 */
export default class App {
  static basicDelay = 100;

  /**
   * App constructor
   *
   * @param appConfig {object} Application params
   * @param store {object} Application store object
   */
  constructor(appConfig, store = {}) {
    const { rootContainer, entryPage, routes, modals } = appConfig;

    this.rootContainer = rootContainer;
    this.routes = routes;
    this.modals = modals;
    this.store = store;

    this.currentPage = this.initComponent(entryPage);
    this.prevPage = null;
    this.activeModal = null;
  }

  /**
   * Method for start application
   */
  bootstrap() {
    this.rootContainer.append(render(this.currentPage));
  }

  /**
   * Method for init component
   *
   * @param ComponentClass {*}
   * @returns Instance {*}
   */
  initComponent(ComponentClass) {
    return new ComponentClass(
      this.store,
      this.openPage.bind(this),
      this.openModal.bind(this)
    );
  }

  /**
   * Method for open Page
   *
   * @param id {string} Page id from config
   */
  openPage(id) {
    if (Object.keys(this.routes).indexOf(id) !== -1) {
      window.scrollTo({ top: 0 });
      this.prevPage = this.currentPage;
      this.currentPage = this.initComponent(this.routes[id]);
      this.bootstrap();

      this.prevPage.close();
      this.currentPage.open();
    }
  }

  /**
   * Method for open Modal
   *
   * @param id {string} Modal id from config
   */
  openModal(id) {
    if (Object.keys(this.modals).indexOf(id) !== -1) {
      this.activeModal = this.initComponent(this.modals[id]);
      this.rootContainer.append(render(this.activeModal));
      setTimeout(() => this.activeModal.open(), App.basicDelay);
    }
  }
}
