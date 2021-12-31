import { AppConfig } from '../core/types';
import { AppStore } from '../shared/types';
import { MainPage } from '../pages';

const appConfig: AppConfig<AppStore> = {
  entry: MainPage,
  modals: {},
  pages: {
    main: MainPage,
  },
  root: document.body,
};

export default appConfig;
