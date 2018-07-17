import { Component } from '@angular/core';

@Component({
  selector: 'button-counter',
  template: `
  <div>
    <small class="text-muted">The following component...</small>
  </div>
  <div style={styles} class="my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2 mb-0">Button Component</h6>
    <div className="pt-3">
      <button (click)="clickCount()" class="btn btn-outline-secondary btn-sm">You clicked me {{ count }} times. (angular component)</button>
    </div>
  </div>
  `,
})

export class ButtonCounterComponent {

  count: number;

  constructor(){
    console.log("I am Angular!")
    this.count = 0;
  }

  clickCount() {
    this.count++;
  }

}
