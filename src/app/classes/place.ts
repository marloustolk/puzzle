import { Coordinate } from './coordinate';
import { Shape } from "./shape";

export class Place {
  coordinate: Coordinate;
  selected: boolean;
  occupied: boolean;
  shape: Shape | undefined;

  constructor(key: number, squareCount: number) {
    let x = key % squareCount;
    let y = Math.floor(key / squareCount);
    this.coordinate = new Coordinate(x,y);
    this.selected = false;
    this.occupied = false;
  }

  setShape(shape: Shape){
    this.shape = shape;
    this.occupied = true;
  }

  removeShape(){
    this.shape = undefined;
    this.occupied = false;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }

  toString(): String {
    return this.coordinate.toString();
  }
}