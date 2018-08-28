import {Injectable, Renderer2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public renderer: Renderer2;
  private draged: HTMLElement;
  private droppable: HTMLElement;

  constructor() {
  }

  addDraged(draged) {
    console.log('draged function', draged)
    this.draged = draged;
  }

  addDroped(droppable) {
    this.droppable = droppable;
  }

  add() {
    if (this.draged && this.droppable) {
      if (this.droppable.nodeName === 'BUTTON') {
        return;
      }
      this.renderer.appendChild(this.droppable, this.draged);
      this.droppable = null;
      this.draged = null;
    }
  }
}
