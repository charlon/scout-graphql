import { Component } from '@angular/core';

@Component({
  selector: 'button-counter',
  template: '<button (click) ="clickCount()">click</button>',
})

export class ButtonCounterComponent {

  count: number = 0;

  constructor(){

    clickCount() : void {
      this.count++;
    }
    
  }

}
