import { AppConfig } from '../core/types';
import { AppContext } from '../shared/types';
import { MainPage } from '../pages';

const appConfig: AppConfig<AppContext> = {
  entry: MainPage,
  modals: {},
  pages: {
    main: MainPage,
  },
  root: document.body,
};

export default appConfig;
