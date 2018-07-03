import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonCounterComponent } from './button-counter.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent, ButtonCounterComponent ],
})
export class AppModule { }
