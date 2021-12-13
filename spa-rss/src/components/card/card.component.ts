import { component } from '../../core/decorators';
import template from './card.component.html';
import { AppComponent } from '../../app';
import { HTMLTemplateVars } from '../../core/types';
import './card.component.scss';

@component({ template })
export default class CardComponent extends AppComponent {
  protected vars: HTMLTemplateVars = {
    content: 'hello world',
  };
}
