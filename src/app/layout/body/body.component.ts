import {Component, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  button: any;

  constructor(public renderer: Renderer2) {
    this.button = renderer.createElement('button');
    this.button.type = 'button';
    this.button.textContent  = 'Hello'
    console.log('to button', this.button);
  // this.button = `<button type="button">Hello</button>`;

  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const element = (<HTMLDivElement>event.target);
    console.log(event);
    console.log(element.style);
    // let st = getComputedStyle(element, null);

    const styl = element.style;
    styl.setProperty('background', '#eeeeee');
    this.renderer.appendChild(element, this.button);
  }


  @HostListener('mouseover', ['$event'])
  onHover(event: MouseEvent): void {
    const element = (<HTMLDivElement>event.target);
    console.log('hover', event);

    event.preventDefault();
  }
}
