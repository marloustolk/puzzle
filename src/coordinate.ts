export class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }

  equals(other: Coordinate) : boolean {
    return other.x === this.x && other.y === this.y;
  }

  toString(): String {
    return '(' + this.x + ',' + this.y + ')';
  }
}