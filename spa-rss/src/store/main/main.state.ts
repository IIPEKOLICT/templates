import { IMainState } from '../../shared/interfaces';
import { StoreKey } from '../../shared/enums';
import { DEFAULT_MAIN_STATE } from '../../shared/defaults';
import { AppState } from '../../app';
import { log } from '../../core/decorators';

export default class MainState
  extends AppState<IMainState>
  implements IMainState {
  protected defaultState: IMainState = DEFAULT_MAIN_STATE;
  protected storeKey: string = StoreKey.Main;

  first: number;
  second: number;

  constructor() {
    super();
    const { first, second } = this.load();
    this.first = first;
    this.second = second;
  }

  @log('updated state saved')
  save() {
    super.save();
  }
}
