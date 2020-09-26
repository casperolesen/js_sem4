"use strict";
// implements the interface
let myFunc1;
myFunc1 = (s1, s2, s3) => {
    let arr = [s1, s2, s3];
    return arr;
};
console.log(myFunc1('String 1', 'String 2', 'String 3'));
// implements the interface that return an array with the strings uppercased
let myFunc2 = (s1, s2, s3) => {
    let arr = [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
    return arr;
};
console.log(myFunc2('String 1', 'String 2', 'String 3'));
// The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
// test f2 with the two implementations of the interface
f2(myFunc1);
f2(myFunc2);
// verify that f2 cannot be used with functions that do not obey the myFunc interface
// f2(function(s1:string, s2:string, s3:string) {
//     return s1 + s2 + s3; // not working (wrong return type)
// })
// working because of duck-typing
f2(function (s1, s2, s3) {
    return [s1, s2, s3];
});
//# sourceMappingURL=interfaces-function-types.js.map