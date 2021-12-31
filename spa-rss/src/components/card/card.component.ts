import { Component } from '../../core/decorators';
import template from './card.component.html';
import { AppPage } from '../../app';
import { HTMLTemplateVars } from '../../core/types';
import './card.component.scss';
import { Action, BtnText } from '../../shared/enums';
import { render } from '../../core/helpers';
import ButtonComponent from '../button/button.component';

@Component({ template })
export default class CardComponent extends AppPage {
  private firstSpan: HTMLSpanElement = document.createElement('span');
  private secondSpan: HTMLSpanElement = document.createElement('span');

  protected vars(): HTMLTemplateVars {
    return {
      first: this.store.main.getFirst(),
      second: this.store.main.getSecond(),
    };
  }

  protected onInit() {
    this.store.main.subscribe(this);
  }

  protected bindElements() {
    this.firstSpan =
      this.node.querySelector<HTMLSpanElement>('.first') || this.firstSpan;
    this.secondSpan =
      this.node.querySelector<HTMLSpanElement>('.second') || this.secondSpan;
  }

  protected inject() {
    this.node.append(
      render(
        new ButtonComponent({
          title: BtnText.IncFirst,
          onClick: () => this.store.main.addFirst(),
        })
      ),
      render(
        new ButtonComponent({
          title: BtnText.IncSecond,
          onClick: () => this.store.main.addSecond(),
        })
      ),
      render(
        new ButtonComponent({
          title: BtnText.Reset,
          onClick: () => this.store.main.reset(),
        })
      )
    );
  }

  update(action?: string) {
    switch (action) {
      case Action.UpdateFirst:
        this.firstSpan.textContent = this.store.main.getFirst().toString();
        break;
      case Action.UpdateSecond:
        this.secondSpan.textContent = this.store.main.getSecond().toString();
        break;
      default:
        break;
    }
  }

  onDestroy() {
    this.store.main.unsubscribe(this);
  }
}
