import { AppComponent } from "./app/app.component";
import { Coordinate } from './coordinate';
import { Shape } from "./shape";

export class Place {
  key: number;
  coordinate: Coordinate;
  selected: boolean;
  occupied: boolean;
  shape: Shape;

  constructor(key: number) {
    let x = key % AppComponent.boardSquareCount;
    let y = Math.floor(key / AppComponent.boardSquareCount);
    this.key = key;
    this.coordinate = new Coordinate(x,y);
    this.selected = false;
    this.occupied = false;
  }

  setShape(shape: Shape){
    this.shape = shape;
    this.occupied = true;
  }

  removeShape(){
    this.shape = null;
    this.occupied = false;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }

  toString(): String {
    return this.coordinate.toString();
  }
}