import { component } from '../../core/decorators';
import template from './main.page.html';
import './main.page.scss';
import { useHtml } from '../../core/hooks';
import { HTMLTemplateVars } from '../../core/types';
import CardComponent from '../../components/card/card.component';
import { AppPage } from '../../app';
import { render } from '../../core/helpers';

@component({ template })
export default class MainPage extends AppPage {
  protected vars: HTMLTemplateVars = {
    message: 'Main page opened.',
  };

  protected inject() {
    this.node.querySelector('.component')?.append(render(new CardComponent()));
    this.node.append(useHtml('<strong>Lol</strong>'));
  }
}
