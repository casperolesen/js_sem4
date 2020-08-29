const count = require("./closuresCounter")(); // remember () at end because the export is a function
const count2 = require("./closuresCounter")(); // remove and export 'let counter' from './closuresCounter' and it will be a singleton
const count3 = require("./closuresCounter")(); // if singleton the count value will be the same. 3 3 3

count.increment();
count.increment();
count2.increment();
console.log(count.value());
console.log(count2.value());
console.log(count3.value());