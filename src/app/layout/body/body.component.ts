import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(private appService: AppServiceService, public rendered: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('Wrapper', this.wrapper);
  }

  @HostListener('mouseup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    console.log('POINTER UP');
    this.appService.addDroped(event);
    this.appService.add();
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: PointerEvent): void {
    this.rendered.addClass(event.target, 'hover');
    // event.preventDefault();
  }

  @HostListener('mouseout', ['$event'])
  onMouseLeave(event: PointerEvent): void {
    console.log('POINTER UP');
    this.rendered.removeClass(event.target, 'hover');
    // event.preventDefault();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: PointerEvent): void {
    console.log('MOUSE MOVE')

  }

}
