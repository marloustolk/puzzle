import { Coordinate } from './coordinate';

export class Shape {
  coordinates: Coordinate[] = new Array();
  width: number;
  height: number;
  background: string;

  constructor(points: Array<number[]>, background: string){
    points.forEach(list => this.coordinates.push(new Coordinate(list[0], list[1])));
    this.background = background;
    this.setSize();
  }

  calculateCoordinates(startCoordinate:Coordinate): Coordinate[]{
    let newCoordinates = new Array();
    this.coordinates.forEach(c => {
      newCoordinates.push(new Coordinate(c.x + startCoordinate.x, c.y + startCoordinate.y))
    });
    return newCoordinates;
  }

  turn(){
    this.coordinates.forEach(c => {
      let x = c.x;
      let y = c.y;
      c.x = -y;
      c.y = x;
    });
    this.repositionNegativeCoordinates();
    this.setSize();
  }

  flip(){
    this.coordinates.forEach(c => {
      let x = c.x;
      let y = c.y;
      c.x = -x;
      c.y = y;
    });
    this.repositionNegativeCoordinates();
    this.setSize();
  }

  repositionNegativeCoordinates(){
    let minX = this.coordinates.map(coordinate => coordinate.x).reduce((x1, x2) => Math.min(x1,x2));
    let minY = this.coordinates.map(coordinate => coordinate.y).reduce((y1, y2) => Math.min(y1,y2));
    if (minX < 0){
      this.coordinates.forEach(c => c.x = c.x - minX);
    }
    if (minY < 0){
      this.coordinates.forEach(c => c.y = c.y - minY);
    }
  }

  setSize(){
    this.width = this.coordinates.map(coordinate => coordinate.x).reduce((x1, x2) => Math.max(x1,x2)) + 1;
    this.height = this.coordinates.map(coordinate => coordinate.y).reduce((y1, y2) => Math.max(y1,y2)) + 1;
  }
}