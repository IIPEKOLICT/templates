/**
 * Hook for add lazy load backgroundImage to HTMLElement
 *
 * @param el {HTMLElement}
 * @param src {string}
 */
export default function useBackground(el, src) {
  const img = new Image();
  const element = el;

  img.src = src;
  img.onload = () => {
    element.style.backgroundImage = `url("${src}")`;
  };
}
