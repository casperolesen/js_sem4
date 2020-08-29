// A contructor function (not used anymore)
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.showThis = function() {
        console.log(this);
    };
    this.show = function() {
        console.log(`${this.make}, ${this.model}`);
    };
    this.showAsync = function() {
        setTimeout(() => { // this is undefined when not using arrow function
            console.log(this.make + ", " + this.model);
        }, 0);
    };
}

const car1 = new Car("Volvo", "V70"); // remember to use new
const car2 = new Car("WW", "Golf");
car1.showThis();
car2.showThis();
car1.show();
car2.show();
car1.showAsync();
car2.showAsync();