import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { Place } from '../place';
import { Shape } from '../shape';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
places: Place[];
shape: Shape = new Shape([ [0,0],[0,1],[1,1],[1,2],[2,0],[2,1] ]);
public static boardSquareCount: number = 9;

  ngOnInit() {
    this.places = new Array();
    for (let i = 0; i < Math.pow(AppComponent.boardSquareCount, 2); i++){
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

  findShapeStart(place: Place): Coordinate {
    let x = Math.min(place.coordinate.x, AppComponent.boardSquareCount - this.shape.width);
    let y = Math.min(place.coordinate.y, AppComponent.boardSquareCount - this.shape.height);
    return new Coordinate(x,y);
  }

  getShapePlaces(place: Place): Place[]{
    return this.shape.getCoordinates(this.findShapeStart(place))
      .map(coordinate => this.places.find(place => place.coordinate.equals(coordinate)));
  }

  select(place: Place){
    this.getShapePlaces(place).forEach(shapePlace => shapePlace.setSelected(true));
  }

  deselect(){
    this.places.forEach(place => place.setSelected(false));
  }

  occupy(place: Place){
    let shapePlaces = this.getShapePlaces(place);
    if (!shapePlaces.some(place => place.occupied)){
      shapePlaces.forEach(place => place.setOccupied(true));
    }
  }
}
