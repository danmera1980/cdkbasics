import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ScrollingComponent } from './components/cdk/scrolling/scrolling.component';
import { OverlayComponent } from './components/cdk/overlay/overlay.component';
import { CardComponent } from './components/card/card.component';
import { DragndropComponent } from './components/cdk/dragndrop/dragndrop.component';
import { RearrangeComponent } from './components/cdk/rearrange/rearrange.component';
import { TransferComponent } from './components/cdk/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollingComponent,
    OverlayComponent,
    CardComponent,
    DragndropComponent,
    RearrangeComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
