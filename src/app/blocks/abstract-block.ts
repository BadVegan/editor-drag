import {HostBinding, HostListener, Renderer2} from '@angular/core';
import {AppServiceService} from '../app-service.service';


export abstract class AbstractBlock {

  @HostBinding('class.draggable') draggable = true;
  isDraging: boolean;

  protected constructor(public renderer: Renderer2, public appService: AppServiceService) {

  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.isDraging = true;
    this.appService.addDraged(this.getHtmlElement());
    console.log(this.getHtmlElement());
  }

  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    console.log('POINTER UP - button');
    if (this.isDraging) {
      this.appService.addDraged(null);
    }
    this.isDraging = false;
  }

  // @HostListener('document:pointermove', ['$event'])
  // onPointerMove(event: PointerEvent): void {
  //   // if (!this.isDraging) {
  //   //   this.appService.addDraged(null);
  //   // }
  // }

  abstract getHtmlElement(): HTMLElement;
}
