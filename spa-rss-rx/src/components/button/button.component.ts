import template from './button.component.html';
import './button.component.scss';
import { ButtonProps } from '../../shared/props';
import { Component } from '../../core/decorators';
import { HTMLTemplateVars } from '../../core/types';
import { AppComponent } from '../../app';

@Component({ template })
export default class ButtonComponent extends AppComponent {
  constructor(private readonly PROPS: ButtonProps) {
    super();
    this.PROPS = PROPS;
  }

  protected vars(): HTMLTemplateVars {
    return {
      title: this.PROPS.title,
      className: this.PROPS.className || '',
    };
  }

  protected handleEvents() {
    this.node.addEventListener('click', () => this.PROPS.onClick());
  }
}
