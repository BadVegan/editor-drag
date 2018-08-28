import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Pipe, PipeTransform, Renderer2, ViewChild} from '@angular/core';
import {AppServiceService} from '../../app-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value));
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;

  html = `<button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>
          <button  type="button" id="Button_ID" class="myButton">Hello</button>`;

  constructor(private appService: AppServiceService, public rendered: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('Wrapper', this.wrapper);
  }


  @HostListener('pointerup', ['$event'])
  onPointerMove(event: PointerEvent): void {
    console.log('pointerup body', event.target);
    this.appService.addDroped(event.target);
    this.appService.add();
  }
}
