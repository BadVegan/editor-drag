import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './blocks/box/box.component';
import {DraggableModule} from './directives/draggable/draggable.module';
import { BlocksComponent } from './layout/blocks/blocks.component';
import {BodyComponent, SafeHtmlPipe} from './layout/body/body.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonComponent } from './blocks/button/button.component';
import {AbstractBlock} from './blocks/abstract-block';
import { TextComponent } from './blocks/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BlocksComponent,
    BodyComponent,
    ButtonComponent,
    SafeHtmlPipe,
    TextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BoxComponent]
})
export class AppModule { }
