import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {
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
  }


  @HostListener('mouseenter', ['$event'])
  onHover(event: MouseEvent): void {
    const element = (<HTMLDivElement>event.target);
    console.log('hover', element);
  }
}
