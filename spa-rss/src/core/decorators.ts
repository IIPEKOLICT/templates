import { ComponentParams } from './types';
import { IComponent } from './interfaces';

/**
 * Main decorators
 */

/**
 * Component decorator
 *
 * @param params {ComponentParams} component params
 */
export function component(params: ComponentParams): any {
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
