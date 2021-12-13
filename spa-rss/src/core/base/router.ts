import { IRouter } from '../interfaces';

/**
 * Base router class
 */
export default class Router implements IRouter {
  public openPage: (id: string) => void;
  public openModal: (id: string) => void;

  /**
   * Base router constructor
   *
   * @param openPage callback for open page
   * @param openModal callback for open modal
   */
  public constructor(
    openPage: (id: string) => void,
    openModal: (id: string) => void
  ) {
    this.openPage = openPage;
    this.openModal = openModal;
  }
}
