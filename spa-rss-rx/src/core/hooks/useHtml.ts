import { HTMLTemplateVars } from '../types';

/**
 * Hook for generate HTMLElement from component template
 *
 * @param template {string} Component template
 * @param vars {HTMLTemplateVars} Component template vars object
 * @returns {HTMLElement} Generated HTMLElement
 */
export default function useHtml(
  template: string,
  vars: HTMLTemplateVars = {}
): HTMLElement {
  const htmlContainer: HTMLTemplateElement = document.createElement('template');

  htmlContainer.innerHTML = Object.keys(vars).reduce(
    (acc: string, v: string) =>
      acc.replace(
        new RegExp(`{{( ?| +)${v}( ?| +)}}`, 'gi'),
        vars[v].toString()
      ),
    template
  );

  return htmlContainer.content.firstChild as HTMLElement;
}
