import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface DataResponse {
  name: string;
  building_name: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'spots-list',
  template: `
    <div>
      <small class="text-muted">The following component...</small>
    </div>
    <div class="my-3 p-3 bg-white rounded box-shadow">
      <h6 class="border-bottom border-gray pb-2 mb-0">{{title}}</h6>
      <div *ngIf="loading; else elseBlock" class="pt-3">Loading...</div>
      <ng-template #elseBlock>
        <ul class="p-0">
            <li class ="media text-muted pt-3" *ngFor="let spot of spots">
            <img src="http://via.placeholder.com/32x32" alt="" class="mr-2 rounded">
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong class="d-block text-gray-dark">{{ spot.name }}</strong>
              {{ spot.building_name }}<br/>
              {{spot.latitude }}, {{ spot.longitude }}
            </p>
           </li>
        </ul>
      </ng-template>
    </div>
  `,
})

export class SpotsListComponent implements OnInit {

  title = 'All Spots';
  spots  = [];
  loading: boolean=false;

  constructor( private http: HttpClient ){

  }

  ngOnInit(): void { // adding the lifecycle hook ngOnInit

    // show the loading message by setting it to true
    this.loading=true;

    this.http.get('/api/v1/spots/?format=json').subscribe((data : any[])=>{
      //console.log(data);
      this.spots = data; // load spots
      this.loading=false; // set loading to false
    });

  }

}
