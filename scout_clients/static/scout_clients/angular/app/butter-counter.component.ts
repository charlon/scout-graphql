import { Component } from '@angular/core';
import { ButtonCounterComponent } from './button-counter.component';

@Component({
  selector: 'butter-counter',
  template: '<button (click) ="clickCount()">click {{ count }}</button>',
})

export class ButterCounterComponent extends ButtonCounterComponent {

  clickCount() {
    this.count+=2;
  }

}
