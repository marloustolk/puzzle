import { Shape } from "./shape";

export class ShapeCreator {
  backgrounds: string[] = new Array();
  shapes: Shape[] = new Array();
  index: number = -1;

  constructor(){
    this.listBackGrounds();
    this.listShapes();
    this.shuffleShapes();
  }

  next(): Shape | undefined {
    if (this.shapes.length > 0){
      this.nextIndex();
      let shape = this.shapes[this.index];
      return shape;
    }
    return undefined;
  }

  nextIndex(){
    if (this.shapes.length === 0){
      this.index = -1;
    } else if (this.index === (this.shapes.length -1) || this.index === (this.shapes.length)) {
      this.index = 0; 
    } else {
      this.index++;
    }
  }

  remove() {
    if (this.index > -1) {
      this.shapes.splice(this.index, 1);
    }
  }

  listBackGrounds(){
      this.backgrounds = [
        "#127069",
        "#5b3072",
        "#490677",
        "#1c4040",
        "#400040",
        "#67056d",
        "#104d92",
        "#706912",
        "#b2a71d",
        "#b25c1d",
        "#124870",
        "#701219",
        "#12703a",
        "#701248",
        "#1DB25C",
        "#1db2a7"];
  }

  listShapes(){
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[0,1],[1,1] ], this.backgrounds[0]));
    this.shapes.push(new Shape([ [0,0],[0,1],[1,1],[1,2],[2,0],[2,1] ], this.backgrounds[1]));
    this.shapes.push(new Shape([ [1,0],[0,1],[1,1],[2,1],[1,2] ], this.backgrounds[2]));
    this.shapes.push(new Shape([ [0,0],[0,1],[1,1],[1,2],[2,2] ], this.backgrounds[3]));
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[3,0],[0,1],[1,1] ], this.backgrounds[4]));
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[0,1],[2,1] ], this.backgrounds[5]));
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[1,1],[0,2],[1,2],[2,2] ], this.backgrounds[6]));
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[3,0],[0,1] ], this.backgrounds[7]));
    this.shapes.push(new Shape([ [0,0],[0,1],[1,1],[2,1] ], this.backgrounds[8]));
    this.shapes.push(new Shape([ [1,0],[0,1],[1,1],[2,1],[3,1],[2,2] ], this.backgrounds[9]));
    this.shapes.push(new Shape([ [1,0],[0,1],[1,1],[2,1],[3,1],[1,2] ], this.backgrounds[10]));
    this.shapes.push(new Shape([ [0,0],[1,0],[1,1],[2,1] ], this.backgrounds[11]));
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0] ], this.backgrounds[12]));
    this.shapes.push(new Shape([ [0,1],[1,1],[2,1],[2,0],[3,0] ], this.backgrounds[13]));
    this.shapes.push(new Shape([ [1,0],[2,0],[0,1],[1,1],[2,1],[3,1] ], this.backgrounds[14]));
    this.shapes.push(new Shape([ [0,0],[0,1],[1,1] ], this.backgrounds[15]));
  }

  shuffleShapes() {
    let curId = this.shapes.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = this.shapes[curId];
      this.shapes[curId] = this.shapes[randId];
      this.shapes[randId] = tmp;
    }
  }
}
