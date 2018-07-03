import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonCounterComponent } from './button-counter.component';
import { ButterCounterComponent } from './butter-counter.component';

@NgModule({
  bootstrap: [ AppComponent, ButtonCounterComponent, ButterCounterComponent ],
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent, ButtonCounterComponent, ButterCounterComponent ],
})
export class AppModule { }
