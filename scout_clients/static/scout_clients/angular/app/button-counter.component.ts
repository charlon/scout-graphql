import { Component } from '@angular/core';

@Component({
  selector: 'button-counter',
  template: '<button (click) ="clickCount()">click {{ count }}</button>',
})

export class ButtonCounterComponent {

  count: number;

  constructor(){
    this.count = 0;
  }

  clickCount() {
    this.count++;
  }

}
