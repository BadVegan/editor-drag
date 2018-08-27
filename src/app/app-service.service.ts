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
    this.draged = draged;
    console.log('addDraged', draged);
  }

  addDroped(droppable) {
    this.droppable = droppable.target;
    console.log('addDroped', droppable.target.id);
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
