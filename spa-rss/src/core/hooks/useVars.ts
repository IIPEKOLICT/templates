import { CssVars } from '../types';

/**
 * Hook for apply css vars to root html element
 *
 * @param vars {CssVars} Css vars
 */
export default function useVars(vars: CssVars = {}): void {
  Object.keys(vars).forEach((key: string) => {
    document.documentElement.style.setProperty(key, vars[key]);
  });
}
