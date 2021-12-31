import { IMainController } from './interfaces';
import { IStream } from '../core/interfaces';

export type AppStore = {
  main: IMainController & IStream;
};
