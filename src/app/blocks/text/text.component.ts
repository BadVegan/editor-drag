import {Component, HostBinding, OnInit, Renderer2} from '@angular/core';
import {AbstractBlock} from '../abstract-block';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends AbstractBlock implements OnInit {


  // @HostBinding('class.draggable') draggable = true;

  constructor(public renderer: Renderer2, public appService: AppServiceService) {
    super(renderer, appService);
  }

  ngOnInit() {
  }

  getHtmlElement(): HTMLElement {
    const button = this.renderer.createElement('div');
    button.type = 'div';
    button.textContent = 'To jest tekst';
    button.id = 'Div_ID';
    // this.renderer.addClass(button, '');
    return button;
  }

}
