import {Component, OnInit} from '@angular/core';
import {AbstractBlock} from '../abstract-block';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends AbstractBlock implements OnInit {


  ngOnInit() {
  }

  getHtmlElement(): HTMLElement {
    const button = this.getRenderer().createElement('div');
    button.textContent = 'To jest tekst';
    button.id = 'Div_ID';
    return button;
  }

}
