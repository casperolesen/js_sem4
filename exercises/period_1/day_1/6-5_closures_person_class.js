class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    // getInfo = () => {
    //     return `${this._name}, ${this._age}`;
    // }

    get info(){
        return `${this._name}, ${this._age}`;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }
}

module.export = Person;
