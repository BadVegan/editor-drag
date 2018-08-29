import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractBlock} from '../abstract-block';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends AbstractBlock implements OnInit {


  ngOnInit() {
  }

  getHtmlElement(): HTMLElement {
    const button = this.getRenderer().createElement('button');
    button.textContent = 'Hello';
    button.id = 'Button_ID';
    this.getRenderer().addClass(button, 'myButton');
    return button;
  }


}
