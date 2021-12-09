/**
 * Hook for generate HTMLElement from component template
 *
 * @param template {string} Component template
 * @param vars {object} Component template vars object
 * @returns {ChildNode} Generated HTMLElement
 */
export default function useHtml(template, vars = {}) {
  const htmlContainer = document.createElement('template');
  htmlContainer.innerHTML = Object.keys(vars).reduce(
    (acc, v) =>
      acc.replace(new RegExp(`{{( ?| +)${v}( ?| +)}}`, 'gi'), vars[v]),
    template
  );

  return htmlContainer.content.firstChild;
}
