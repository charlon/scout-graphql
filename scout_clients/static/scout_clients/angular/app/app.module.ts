import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ButtonCounterComponent } from './button-counter.component';
import { ButterCounterComponent } from './butter-counter.component';
import { SpotsListComponent } from './spots-list.component';

@NgModule({
  bootstrap: [
    ButtonCounterComponent,
    ButterCounterComponent,
    SpotsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    ButtonCounterComponent,
    ButterCounterComponent,
    SpotsListComponent
  ],
})
export class AppModule { }
