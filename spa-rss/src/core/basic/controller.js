/**
 * Base controller class
 */
export default class Controller {
  /**
   * Controller constructor
   *
   * @param State State class
   * @param service Service instance
   */
  constructor(State, service = {}) {
    this.state = new State();
    this.service = service;
  }
}
