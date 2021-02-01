import { Component, OnInit } from "@angular/core";
import { ShapeCreator } from "./shapecreator";
import { Coordinate } from "./coordinate";
import { Place } from "./place";
import { Shape } from "./shape";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  places: Place[];
  shapeBoard: Place[];
  shapeCreator: ShapeCreator = new ShapeCreator();
  shape: Shape;
  public static boardSquareCount: number = 9;
  public static shapeSquareCount: number = 4;

  ngOnInit() {
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

  newShape() {
    this.shape = this.shapeCreator.next();
    this.shapeBoard.forEach(place => place.removeShape());
    if (this.shape != null) {
      this.setShapeBoard();
    }
  }

  turnShape() {
    if (this.shape != null) {
      this.shape.turn();
      this.setShapeBoard();
    }
  }
  flipShape() {
    if (this.shape != null) {
      this.shape.flip();
      this.setShapeBoard();
    }
  }

  setShapeBoard(){
    this.shapeBoard.forEach(place => place.removeShape());
    this.shape.coordinates
        .map(coordinate => this.shapeBoard.find(place => place.coordinate.equals(coordinate)))
        .forEach(place => place.setShape(this.shape));
  }

  getBackground(place: Place): string {
    if (place.occupied) {
      return place.selected ? "#ce1045" : place.shape.background;
    } else {
      return place.selected ? "#75C6C0" : "#000000";
    }
  }

  findShapeStart(place: Place): Coordinate {
    let x = Math.min(
      place.coordinate.x,
      AppComponent.boardSquareCount - this.shape.width
    );
    let y = Math.min(
      place.coordinate.y,
      AppComponent.boardSquareCount - this.shape.height
    );
    return new Coordinate(x, y);
  }

  getShapePlaces(place: Place): Place[] {
    return this.shape
      .calculateCoordinates(this.findShapeStart(place))
      .map(coordinate =>
        this.places.find(place => place.coordinate.equals(coordinate))
      );
  }

  select(place: Place) {
    if (this.shape != null) {
      this.getShapePlaces(place).forEach(shapePlace =>
        shapePlace.setSelected(true)
      );
    }
  }

  deselect() {
    this.places.forEach(place => place.setSelected(false));
  }

  occupy(place: Place) {
    let shapePlaces = this.getShapePlaces(place);
    if (!shapePlaces.some(place => place.occupied)) {
      shapePlaces.forEach(place => place.setShape(this.shape));
      this.shapeCreator.remove();
      this.newShape();
    }
  }
}
