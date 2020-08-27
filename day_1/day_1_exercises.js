// 2) Implement user defined functions that take callbacks as an argument

/*
a)  Implement a function: myFilter(array, callback)that takes an array as the first argument,
    and a callback as the second and returns a new (filtered) array
    according to the code provided in the callback (that is with the same behaviour as the original filter method).
*/

var valueArray = [12, 5, 8, 130, 44];

function myFilter(array, callback) {
    let filteredArray = [];
    array.forEach(value => {
        if (callback(value)) {
            filteredArray.push(value);
        };
    });

    return filteredArray;
};

// check if value is bigger or equal to 10
function myFilterCallback(value) {
    return value >= 10;
};

let customFilter = myFilter(valueArray, myFilterCallback);
let jsFilter = valueArray.filter(myFilterCallback);

console.log("FILTER");
console.log("Start Array");
console.log(valueArray);

console.log("My Custom Filter");
console.log(customFilter);

console.log("Using filter()");
console.log(jsFilter);

/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback,
provides the same functionality as calling the existing map method on an array.
*/

function myMap(array, callback) {
    let mappedArray = [];
    array.forEach(value => {
        mappedArray.push(callback(value));
    });

    return mappedArray;
};

// returns double value
function myMapCallback(value) {
    return value * 2;
}

let customMap = myMap(valueArray, myMapCallback);
let jsMap = valueArray.map(myMapCallback);

console.log("MAP");
console.log("Start Array");
console.log(valueArray);

console.log("My Custom Map");
console.log(customMap);

console.log("Using map()");
console.log(jsMap);


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