import {AfterContentInit, ElementRef, HostBinding, HostListener, Inject, Injectable, Renderer2, ViewChild} from '@angular/core';
import {AppServiceService} from '../app-service.service';
import {DOCUMENT} from '@angular/common';

@Injectable()
export abstract class AbstractBlock implements AfterContentInit {

  @HostBinding('class.draggable') draggable = true;
  private isDraging: boolean;

  constructor(private renderer: Renderer2, private appService: AppServiceService, @Inject(DOCUMENT) private document) {

    // console.log('abs', document.getElementById('container'))

    //
    // this.renderer.listen(document.getElementById('container'), 'click', () => {
    //   console.log('ABSTRACT')
    // });
  }

  protected getRenderer(): Renderer2 {
    return this.renderer;
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


  abstract getHtmlElement(): HTMLElement;

  ngAfterContentInit(): void {


   //  // const doc = iFrame.nativeElement.contentDocument || iFrame.nativeElement.contentWindow;
   //  this.renderer.listen(iFrame, 'pointerup', (event) => {
   //    console.log('ABSTRACT');
   //    this.appService.addDroped(event.target);
   //    this.appService.add();
   //  });
  }
}
