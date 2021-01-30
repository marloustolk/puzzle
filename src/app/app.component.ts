import { Component, OnInit } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
places: Place[];
shape: Place[] = [new Place(0), new Place(1), new Place(2), new Place(9)];
boardSquareCount: number = 9;

  ngOnInit() {
    this.places = new Array();
    for (let i = 0; i < Math.pow(this.boardSquareCount, 2); i++){
      this.places.push(new Place(i));
    }
  }

  getColor(place: Place): string {
    if (place.occupied){
      return place.selected ? "rgb(212, 0, 0)" : "rgba(61,104,66)";
    } else {
      return place.selected ? "rgb(122, 209, 133)" : "rgba(255, 255, 255, 0.8)";
    }
  }

  select(place: Place){
    place.setSelected(true);
  }

  deselect(){
    this.places.forEach(place => place.setSelected(false));
  }

  occupy(place: Place){
    if (!place.occupied){
      place.setOccupied(true);
    }
  }
}
