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

  next(): Shape {
    console.log(this.shapes)
    if (this.shapes.length > 0){
      this.nextIndex();
      let shape = this.shapes[this.index];
      return shape;
    }
    return null;
  }

  nextIndex(){
    if (this.shapes.length === 0){
      this.index = -1;
    } else if (this.index === (this.shapes.length -1)) {
      this.index = 0; 
    } else {
      this.index++;
    }
    console.log("index=" +this.index);
  }

  remove() {
    if (this.index > -1) {
      this.shapes.splice(this.index, 1);
    }
  }

  listBackGrounds(){
    this.backgrounds = [
      "repeating-linear-gradient(135deg,#1aa196,#1aa196 10px,white 10px,white 20px)",
      "repeating-linear-gradient(135deg,#400040,#400040 10px,white 10px,white 20px)",
      "#127069",
      "#5b3072",
      "repeating-linear-gradient(135deg,#67056d,#67056d 10px,white 10px,white 20px)",
      "repeating-linear-gradient(135deg,#104d92,#104d92 10px,white 10px,white 20px)",
      "#490677",
      "#1c4040",
      "repeating-linear-gradient(135deg,#490677,#490677 10px,white 10px,white 20px)",
      "#400040",
      "repeating-linear-gradient(135deg,#127069,#127069 10px,white 10px,white 20px)",
      "repeating-linear-gradient(135deg,#5b3072,#5b3072 10px,white 10px,white 20px)",
      "#67056d",
      "#104d92",
      "repeating-linear-gradient(135deg,#ce1045,#ce1045 10px,white 10px,white 20px)",
      "repeating-linear-gradient(135deg,#1c4040,#1c4040 10px,white 10px,white 20px)"];
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