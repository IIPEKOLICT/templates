import { ComponentParams } from './types';
import { IComponent, IState, IStream } from './interfaces';

/**
 * Main decorators
 */

/**
 * Component decorator
 *
 * @param params {ComponentParams} component params
 */
export function Component(params: ComponentParams) {
  return function <T extends new (...args: any[]) => IComponent>(
    Constructor: T
  ) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
        this.template = params.template;
      }
    };
  };
}

/**
 * Action decorator
 *
 * @param actions {string[]} list of triggered actions (can be empty)
 */
export const action = (...actions: string[]) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const stock = descriptor.value;
    descriptor.value = function (...args: any[]) {
      stock.apply(this, args);
      (this as IStream & { state: IState }).state.save();
      (this as IStream & { state: IState }).notify(actions);
    };
  };
};

/**
 * Log decorator
 *
 * @param message {string | undefined} output message
 */
export const log = (message?: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const stock = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(message || propertyKey);
      return stock.apply(this, args);
    };
  };
};
