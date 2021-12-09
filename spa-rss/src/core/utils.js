/**
 * Main utils
 */

/**
 * Util for start application.
 * Launches app bootstrap method
 *
 * @param app { App } instance of application class
 */
export function bootstrap(app) {
  app.bootstrap();
}

/**
 * Util for inject component into Node
 * Launches component render method and returns generated Node (HTMLElement)
 *
 * @param component {Component} instance of class Component or its child class
 * @returns {HTMLElement}
 */
export function render(component) {
  return component.render();
}

/**
 * Util for play audio
 *
 * @param audioPath {string}
 * @param volume {float | number}
 */
export function playSound(audioPath, volume) {
  const audio = new Audio(audioPath);
  audio.volume = volume;
  audio.play().then();
}
