import { bootstrap } from './core/helpers';
import { App, appConfig, appStore } from './app';

bootstrap(new App(appConfig, appStore));
