/**
 * Hook for apply css vars to root html element
 *
 * @param vars {{string: string|number}} Css vars
 */
export default function useVars(vars = {}) {
  Object.keys(vars).forEach((key) => {
    document.documentElement.style.setProperty(key, vars[key]);
  });
}
