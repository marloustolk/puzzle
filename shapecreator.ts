import { Shape } from "./src/shape";

export class ShapeCreator {
  backgrounds: string[] = new Array();
  shapes: Shape[] = new Array();
  next: number = 0;

  constructor(){
    this.listBackGrounds();
    this.listShapes();
  }
  
  getNextBackGround(): string {
    return this.backgrounds[this.next];
    this.next++;
  }

  listBackGrounds(){
    this.backgrounds.push("repeating-linear-gradient(135deg,#1aa196,#1aa196 10px,white 10px,white 20px)");
    this.backgrounds.push("repeating-linear-gradient(135deg,#400040,#400040 10px,white 10px,white 20px)");
    this.backgrounds.push("#127069");
    this.backgrounds.push("#5b3072");
    this.backgrounds.push("repeating-linear-gradient(135deg,#67056d,#67056d 10px,white 10px,white 20px)");
    this.backgrounds.push("repeating-linear-gradient(135deg,#104d92,#104d92 10px,white 10px,white 20px)");
    this.backgrounds.push("#ce1045");
    this.backgrounds.push("#1c4040");
    this.backgrounds.push("repeating-linear-gradient(135deg,#490677,#490677 10px,white 10px,white 20px)");
    this.backgrounds.push("#400040");
    this.backgrounds.push("repeating-linear-gradient(135deg,#127069,#127069 10px,white 10px,white 20px)");
    this.backgrounds.push("repeating-linear-gradient(135deg,#5b3072,#5b3072 10px,white 10px,white 20px)");
    this.backgrounds.push("#67056d");
    this.backgrounds.push("#104d92");
    this.backgrounds.push("repeating-linear-gradient(135deg,#ce1045,#ce1045 10px,white 10px,white 20px)");
    this.backgrounds.push("repeating-linear-gradient(135deg,#1c4040,#1c4040 10px,white 10px,white 20px)");
    this.backgrounds.push("#1aa196");
    this.backgrounds.push("#490677");
  }

  listShapes(){
    this.shapes.push(new Shape([ [0,0],[1,0],[2,0],[0,1],[1,1] ], this.getNextBackGround()));
    this.shapes.push(new Shape([ [0,0],[0,1],[1,1],[1,2],[2,0],[2,1] ], this.getNextBackGround()));
  }
}