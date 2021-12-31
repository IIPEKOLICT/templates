import { Component } from '../../core/decorators';
import template from './main.page.html';
import './main.page.scss';
import { useHtml } from '../../core/hooks';
import { HTMLTemplateVars } from '../../core/types';
import CardComponent from '../../components/card/card.component';
import { AppPage } from '../../app';
import { render } from '../../core/helpers';
import { HELLO_WORD } from '../../shared/constants';

@Component({ template })
export default class MainPage extends AppPage {
  private card: CardComponent | null = null;

  protected vars(): HTMLTemplateVars {
    return { title: HELLO_WORD };
  }

  protected onInit() {
    this.card = new CardComponent(this.router, this.store);
  }

  protected inject() {
    this.node.append(useHtml('<strong>React-style component</strong>'));

    if (this.card) {
      this.node.querySelector('.component')?.append(render(this.card));
    }
  }

  onDestroy() {
    this.card?.onDestroy();
  }
}
