import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
places: Map<number, boolean>;
shape: number[] = [1,3,10,11,12,20];
boardSquareCount: number = 9;

  ngOnInit() {
    this.places = new Map<number, boolean>();
    this.deselect();
  }

  getColor(selected: boolean): string {
    return selected ? "rgb(122, 209, 133)" : "rgba(255, 255, 255, 0.8)";
  }

  select(key: number){
    this.places.set(key, true);
  }

  deselect(){
    for (let i = 1; i <= Math.pow(this.boardSquareCount, 2); i++){
      this.places.set(i, false);
    }
  }
}
