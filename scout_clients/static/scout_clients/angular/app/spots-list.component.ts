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
    <h2>{{title}}</h2>

    <div>
      Loading.....
    </div>

    <ul class="media-list">
        <li class ="media" *ngFor="let spot of spots">
           <div class="media-left">
              <a href="#"><img class="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{ spot.name }}</h4>
            <p>{{ spot.building_name }}<br/>
            {{ spot.latitude }}, {{ spot.longitude }}</p>
          </div>
       </li>
    </ul>

  `,
})

export class SpotsListComponent implements OnInit {

  title = 'All Spots';
  private spots  = [];

  constructor( private http: HttpClient ){

  }

  ngOnInit(): void { // adding the lifecycle hook ngOnInit

    this.http.get('/api/v1/spots/?format=json').subscribe((data : any[])=>{
      //console.log(data);
      this.spots = data;
    });

  }

}
