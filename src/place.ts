import { AppComponent } from "./app/app.component";
import { Coordinate } from './coordinate';

export class Place {
  key: number;
  coordinate: Coordinate;
  selected: boolean;
  occupied: boolean;

  constructor(key: number) {
    let x = key % AppComponent.boardSquareCount;
    let y = Math.floor(key / AppComponent.boardSquareCount);
    this.key = key;
    this.coordinate = new Coordinate(x,y);
    this.selected = false;
    this.occupied = false;
  }

  setOccupied(occupied: boolean){
    this.occupied = occupied;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }

  toString(): String {
    return this.coordinate.toString();
  }
}