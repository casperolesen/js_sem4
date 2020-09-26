"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _radius, _height;
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    ;
    set color(color) { this._color = color; }
    ;
}
/*
Verify that you cannot (why) make an instance of this class.
- Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
*/
//let shape = new Shape('blue'); // not possible
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        _radius.set(this, void 0);
        __classPrivateFieldSet(this, _radius, radius);
    }
    get radius() { return __classPrivateFieldGet(this, _radius); }
    ;
    set radius(radius) { __classPrivateFieldSet(this, _radius, radius); }
    ;
    get area() {
        return Math.PI * (Math.pow(__classPrivateFieldGet(this, _radius), 2));
    }
    get perimeter() {
        return 2 * __classPrivateFieldGet(this, _radius) * Math.PI;
    }
    toString() {
        return `Color: ${this.color}, Radius: ${this.radius}`;
    }
}
_radius = new WeakMap();
// Testing the class constructor, the getters/setters and the three methods.
let circle = new Circle('blue', 10);
console.log("---CIRCLE---");
console.log(`toString: ${circle}`);
console.log(`Color: ${circle.color}`);
console.log(`Radius: ${circle.radius}`);
console.log(`Area: ${circle.area}`);
console.log(`Perimeter: ${circle.perimeter}`);
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        _height.set(this, void 0);
        __classPrivateFieldSet(this, _height, height);
    }
    get height() { return __classPrivateFieldGet(this, _height); }
    set height(height) { __classPrivateFieldSet(this, _height, height); }
    get area() {
        return 2 * Math.PI * this.radius * this.height;
    }
    get perimeter() {
        throw new Error("Method not implemented.");
    }
    get volume() {
        return Math.PI * (Math.pow(this.radius, 2)) * this.height;
    }
}
_height = new WeakMap();
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
//# sourceMappingURL=abstract-class.js.map