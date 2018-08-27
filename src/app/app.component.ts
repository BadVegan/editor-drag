import {Component, Renderer2} from '@angular/core';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private renderer: Renderer2, private appService: AppServiceService) {
    this.appService.renderer = this.renderer;
  }

  // onDragStar(event: PointerEvent) {
  //   console.log('onDragStar', event);
  // }
  //
  // onDragMove(event: PointerEvent) {
  //  // console.log('onDragMove', event);
  // }
  //
  // onDragEnd(event: PointerEvent) {
  //   console.log('onDragEnd', event);
  // }
}
