const Person = require('./closures_person_class');

let person1 = new Person('Casper', 30);
person1.age = 31;
person1.info = "override"; // not overriding because no setter to info
console.log(person1.info)