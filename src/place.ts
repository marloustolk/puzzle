export class Place {
  x: number;
  y: number;
  selected: boolean;
  occupied: boolean;

  constructor(key: number) {
    this.x = key % 9;
    this.y = Math.floor(key / 9);
    this.selected = false;
    this.occupied = false;
  }

  setOccupied(occupied: boolean){
    this.occupied = occupied;
  }

  setSelected(selected: boolean){
    this.selected = selected;
  }
}