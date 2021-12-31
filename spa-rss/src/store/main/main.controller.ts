import { AppController } from '../../app';
import { IMainController, IMainState } from '../../shared/interfaces';
import MainState from './main.state';
import { Action } from '../../shared/enums';
import { DEFAULT_MAIN_STATE } from '../../shared/defaults';
import { action } from '../../core/decorators';

export default class MainController
  extends AppController<IMainState>
  implements IMainController {
  protected state: MainState = new MainState();

  @action(Action.UpdateFirst)
  addFirst(): void {
    this.state.first += 1;
  }

  @action(Action.UpdateSecond)
  addSecond(): void {
    this.state.second += 1;
  }

  getFirst(): number {
    return this.state.first;
  }

  getSecond(): number {
    return this.state.second;
  }

  @action(Action.UpdateFirst, Action.UpdateSecond)
  reset(): void {
    this.state.first = DEFAULT_MAIN_STATE.first;
    this.state.second = DEFAULT_MAIN_STATE.second;
  }
}
