import { AppStore } from '../shared/types';
import { mainController } from '../store';

const appStore: AppStore = {
  main: mainController,
};

export default appStore;
