// 3) Using the Prototype property to add new functionality to existing objects
var names = ["Lars", "Peter", "Jan", "Bo"];
console.log("Start Array");
console.log(names);

function myFilter2(bigEnough) { // custom filter added to Array's Prototype property
    let filtered = [];
    for (let i=0; i < this.length; i++) {
        if (bigEnough(this[i])) {
            filtered.push(this[i])
        }
    };
    return filtered;
}

function bigEnough(name) { // test if name is longer than 3
    return name.length > 3;
}

Array.prototype.myFilter = myFilter2;
var newArray = names.myFilter(name => bigEnough(name));
console.log("Filtered using custom Prototype property");
console.log(newArray);
console.log("Filtered using filter()");
console.log(names.filter(bigEnough));

function myMap2(nameTwice) {
    let mapped = [];
    for (let i = 0; i < this.length; i++) {
        mapped.push(nameTwice(this[i]));
    }
    return mapped;
}

function nameTwice(name) {
    return name + name;
}

Array.prototype.myMap = myMap2;
newArray = names.myMap(name => nameTwice(name));
console.log("Mapped using custom Prototype property");
console.log(newArray);
console.log("Mapped using map()");
console.log(names.map(nameTwice));