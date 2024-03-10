import { Component, OnInit } from '@angular/core';
import { Coordinate } from './classes/coordinate';
import { Place } from './classes/place';
import { Shape } from './classes/shape';
import { ShapeCreator } from './classes/shapecreator';

@Component({
  selector: 'app-puzzle',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  name = 'Epibratie - Puzzle'
  places: Place[] = [];
  shapeBoard: Place[] = [];
  shapeCreator: ShapeCreator = new ShapeCreator();
  shape: Shape | undefined;
  lastShape: Shape | undefined;
  lastPlace: Place | undefined;
  public static boardSquareCount: number = 9;
  public static shapeSquareCount: number = 4;
  
  ngOnInit() {
    this.start();
  }

  start() {
    this.places = new Array();
    for (let i = 0; i < Math.pow(AppComponent.boardSquareCount, 2); i++) {
      this.places.push(new Place(i, AppComponent.boardSquareCount));
    }
    this.shapeBoard = new Array();
    for (let i = 0; i < Math.pow(AppComponent.shapeSquareCount, 2); i++) {
      this.shapeBoard.push(new Place(i, AppComponent.shapeSquareCount));
    }
    this.newShape();
  }

  checkEvent(event: string) {
    if (event === 'restart') {
      this.start();
    } else {
      this.undo();
    }
  }
  
  newShape() {
    this.shape = this.shapeCreator.next();
    this.shapeBoard.forEach(place => place.removeShape());
    if (this.shape !== undefined) {
      this.setShapeBoard();
    }
  }
  
  turnShape() {
    if (this.shape !== undefined) {
      this.shape.turn();
      this.setShapeBoard();
    }
  }
  flipShape() {
    if (this.shape !== undefined) {
      this.shape.flip();
      this.setShapeBoard();
    }
  }
  
  setShapeBoard(){
    this.shapeBoard.forEach(place => place.removeShape());
    if (this.shape !== undefined) {
      this.shape.coordinates
        .map(coordinate => this.shapeBoard.find(place => place.coordinate.equals(coordinate)))
        .filter((place): place is Place => place !== undefined)
        .forEach((place: Place) => {
          if (this.shape) {
             place.setShape(this.shape);
          }
        });
    }
  }
  
  getBackground(place: Place): string {
    if (place.occupied) {
      return place.selected ? "#ce1045" : place.shape!.background;
    } else {
      return place.selected ? "#75C6C0" : "#000000";
    }
  }
  
  findShapeStart(place: Place): Coordinate {
    let x = Math.min(
      place.coordinate.x,
      AppComponent.boardSquareCount - this.shape!.width
    );
    let y = Math.min(
      place.coordinate.y,
      AppComponent.boardSquareCount - this.shape!.height
    );
    return new Coordinate(x, y);
  }
  
  getShapePlaces(place: Place, shape: Shape): Place[] {
    if (shape === undefined) {
      return [];
    }
    return shape
      .calculateCoordinates(this.findShapeStart(place))
      .map((coordinate: Coordinate) => {
        return this.places.find((place: Place) => place.coordinate.equals(coordinate))
      }).filter((place): place is Place => place !== undefined);
  }
  
  select(place: Place) {
    if (this.shape != null) {
      this.getShapePlaces(place, this.shape).forEach(shapePlace =>
        shapePlace.setSelected(true)
      );
    }
  }
  
  deselect() {
    this.places.forEach(place => place.setSelected(false));
  }
  
  occupy(place: Place) {
    let shapePlaces = this.getShapePlaces(place, this.shape!);
    console.log('places', shapePlaces.map(place => place.coordinate))
    if (!shapePlaces.some(place => place.occupied)) {
      shapePlaces.forEach(place => {
        if (this.shape) {
          place.setShape(this.shape);
        }
      });
      this.lastShape = this.shape;
      this.lastPlace = place;
      this.shapeCreator.remove();
      this.newShape();
    }
  }

  undo() {
    if (this.lastPlace) {
      let shapePlaces = this.getShapePlaces(this.lastPlace, this.lastShape!);
      shapePlaces.forEach(place => place.removeShape());
      this.shapeCreator.shapes.push(this.lastShape!);
      this.lastPlace = undefined;
      this.lastShape = undefined;
    }
  }
  }
  