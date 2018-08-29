import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Pipe,
  PipeTransform,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value));
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('iFrame') iFrame: ElementRef;
  test;

  html = `<button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>`;


  constructor(private appService: AppServiceService, public rendered: Renderer2, private sanitizer: DomSanitizer, @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    const div = this.createDivWrapper();
    const body = this.iFrame.nativeElement.contentDocument.body;
    this.rendered.appendChild(body, div);

    const link = this.rendered.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './../../../assets/style.css';

    const style = this.rendered.createElement('style');


    this.iFrame.nativeElement.contentDocument.head.appendChild(link);
    this.iFrame.nativeElement.contentDocument.head.appendChild(style);

    console.log('Wrapper', this.iFrame.nativeElement.contentDocument.getElementById('wrapper'));


    this.rendered.listen(div, 'pointerup', (event) => {
      console.log('ABSTRACT');
      this.appService.addDroped(event.target);
      this.appService.add();
    });

  }

  createDivWrapper(): HTMLElement {
    const divRoot = this.rendered.createElement('div');
    this.rendered.addClass(divRoot, 'container');
    divRoot.id = 'wrapper';
    divRoot.innerHTML = this.html;
    return divRoot;
  }

}
