import { useHtml } from '../hooks';
import { HTMLTemplateVars } from '../types';
import { IComponent } from '../interfaces';

/**
 * Base component class
 */
export default class Component implements IComponent {
  public template = '<div></div>';
  protected vars: HTMLTemplateVars = {};
  protected node: HTMLElement = document.createElement('div');

  /**
   * Prebuilt method for init component
   *
   * @protected
   */
  protected onInit(): void {
    this.node = useHtml(this.template, this.vars);
  }

  /**
   * Prebuilt method for binding
   *
   * @protected
   */
  protected bindElements(): void {
    //
  }

  /**
   * Prebuilt method for add dynamic content to element
   *
   * @protected
   */
  protected inject(): void {
    //
  }

  /**
   * Prebuilt method for handle component events
   *
   * @protected
   */
  protected handleEvents(): void {
    //
  }

  /**
   * Prebuilt method for render component
   */
  public render(): HTMLElement {
    this.onInit();
    this.bindElements();
    this.inject();
    this.handleEvents();
    return this.node;
  }
}
