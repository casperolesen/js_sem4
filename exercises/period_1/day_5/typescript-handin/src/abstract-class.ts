abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }

    get color():string {return this._color};
    set color(color:string) {this._color = color};

    abstract get area():number;
    abstract get perimeter(): number;

    abstract toString():string;

  }

  /* 
  Verify that you cannot (why) make an instance of this class.
  - Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class. 
  */

  //let shape = new Shape('blue'); // not possible

  class Circle extends Shape {
      #radius:number;

      constructor(color:string, radius:number) {
          super(color);
          this.#radius = radius;
      }

      get radius():number {return this.#radius};
      set radius(radius:number) {this.#radius = radius};

      get area(): number {
          return Math.PI * (this.#radius ** 2)
      }
      get perimeter(): number {
          return 2 * this.#radius * Math.PI;
      }

      toString():string {
        return `Color: ${this.color}, Radius: ${this.radius}`; 
      }
  }

  // Testing the class constructor, the getters/setters and the three methods.
  let circle = new Circle('blue', 10);
  console.log("---CIRCLE---");
  console.log(`toString: ${circle}`);
  console.log(`Color: ${circle.color}`);
  console.log(`Radius: ${circle.radius}`);
  console.log(`Area: ${circle.area}`);
  console.log(`Perimeter: ${circle.perimeter}`);

  
  class Cylinder extends Circle {
      #height:number;

      constructor(color:string, radius:number, height:number) {
          super(color, radius);
          this.#height = height;
      }

      get height():number {return this.#height}
      set height(height:number) {this.#height = height}

      get area():number {
          return 2 * Math.PI * this.radius * this.height
      }

      get perimeter():number {
        throw new Error("Method not implemented.");
      }

      get volume():number {
          return Math.PI * (this.radius ** 2) * this.height;
      }
  }

  // testing Cylinder
  let cylinder = new Cylinder('yellow', 10, 20);
  console.log("---CYLINDER---");
  console.log(`toString: ${cylinder}`);
  console.log(`Color: ${cylinder.color}`);
  console.log(`Radius: ${cylinder.radius}`);
  console.log(`Height: ${cylinder.height}`);
  console.log(`Area: ${cylinder.area}`);
  //console.log(`Perimeter: ${cylinder.perimeter}`);
  console.log(`Volume: ${cylinder.volume}`);
  
  
  
  