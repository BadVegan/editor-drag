import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  button: any;

  constructor(private renderer: Renderer2) {

  }

  getButton(): HTMLElement {
    const button = this.renderer.createElement('button');
    button.type = 'button';
    button.textContent = 'Hello';
    button.id = 'Button_ID';
    this.renderer.addClass(button, 'myButton');
    return button;
  }

  ngOnInit() {
  }

}
