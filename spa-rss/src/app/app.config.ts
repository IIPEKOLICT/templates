import { AppConfig } from '../core/types';
import { Store } from '../shared/types';
import MainPage from '../pages/main/main.page';

const appConfig: AppConfig<Store> = {
  entry: MainPage,
  modals: {},
  pages: {
    main: MainPage,
  },
  root: document.body,
};

export default appConfig;
