import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {setStyles} from '@angular/animations/browser/src/util';

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
  onPointerDown(event: MouseEvent): void {
    let element = (<HTMLDivElement>event.target);
    console.log(event);
    console.log(element.style);
    let st = getComputedStyle(element, null);
    // st.setProperty('background', '#eeeeee');
    console.log(st);
    // setStyles(element, {'background': 'red'});

    let styl = element.style;
    styl.setProperty('background', '#eeeeee')
  }
}
