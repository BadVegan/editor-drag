import {Component, HostBinding, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import {AbstractBlock} from '../abstract-block';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends AbstractBlock implements OnInit {

  // @HostBinding('class.draggable') draggable = true;

  constructor(public renderer: Renderer2, public appService: AppServiceService) {
    super(renderer, appService);
  }

  ngOnInit() {
  }

  getHtmlElement(): HTMLElement {
    const button = this.renderer.createElement('button');
    button.type = 'button';
    button.textContent = 'Hello';
    button.id = 'Button_ID';
    this.renderer.addClass(button, 'myButton');
    return button;
  }

}
