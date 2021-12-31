import { Component } from '../../core/decorators';
import template from './card.component.html';
import { AppPage } from '../../app';
import { HTMLTemplateVars } from '../../core/types';
import './card.component.scss';
import { BtnText } from '../../shared/enums';
import { render } from '../../core/helpers';
import ButtonComponent from '../button/button.component';

@Component({ template })
export default class CardComponent extends AppPage {
  private firstSpan: HTMLSpanElement = document.createElement('span');
  private secondSpan: HTMLSpanElement = document.createElement('span');

  protected vars(): HTMLTemplateVars {
    return {
      first: this.context.main.first.value,
      second: this.context.main.second.value,
    };
  }

  private updateFirst(): void {
    this.firstSpan.textContent = this.context.main.first.value.toString();
  }

  private updateSecond(): void {
    this.secondSpan.textContent = this.context.main.second.value.toString();
  }

  protected onInit() {
    this.context.main.first.subscribe(this.updateFirst.bind(this));
    this.context.main.second.subscribe(this.updateSecond.bind(this));
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
          onClick: () => {
            this.context.main.first.value += 1
          },
        })
      ),
      render(
        new ButtonComponent({
          title: BtnText.IncSecond,
          onClick: () => {
            this.context.main.second.value += 1
          },
        })
      ),
      render(
        new ButtonComponent({
          title: BtnText.Reset,
          onClick: () => this.context.main.reset(),
        })
      )
    );
  }

  onDestroy() {
    this.context.main.first.unsubscribe(this.updateFirst.bind(this));
    this.context.main.second.unsubscribe(this.updateSecond.bind(this));
  }
}
