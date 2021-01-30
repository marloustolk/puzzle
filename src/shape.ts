import { Coordinate } from './coordinate';

export class Shape {
  coordinates: Coordinate[] = new Array();
  width: number;
  height: number;
  background: string;

  constructor(points: Array<number[]>, background: string){
    points.forEach(list => this.coordinates.push(new Coordinate(list[0], list[1])));
    this.width = this.coordinates.map(coordinate => coordinate.x).reduce((x1, x2) => Math.max(x1,x2)) + 1;
    this.height = this.coordinates.map(coordinate => coordinate.y).reduce((y1, y2) => Math.max(y1,y2)) + 1;
    this.background = background;
  }

  getCoordinates(startCoordinate:Coordinate): Coordinate[]{
    let newCoordinates = new Array();
    let xDiff = this.coordinates[0].x + startCoordinate.x;
    let yDiff = this.coordinates[0].y + startCoordinate.y;
    this.coordinates.forEach(c => {
      newCoordinates.push(new Coordinate(c.x + xDiff, c.y + yDiff))
    });
    return newCoordinates;
  }
}