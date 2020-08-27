class Car {
    constructor(make, model){
        this._make = make;
        this._model = model;
        this.show = this.show.bind(this);
    }

    // show = () => {
    //     console.log(`${this._make}, ${this._model}`);
    // }

    show = function(){ // using bind
        console.log(`${this._make}, ${this._model}`);
    }

    showAsync = function(){
        setTimeout(this.show, 1000);
    }

    get make(){
        return this._make;
    }

    set make(make){
        this._make = make;
    }
}

const car1 = new Car("Volvo", "V70"); // remember to use new
const car2 = new Car("WW", "Golf");
car1.make = "V60";
console.log(car1.make);
// car1.show();
// car2.show();
car1.showAsync();
car2.showAsync();
