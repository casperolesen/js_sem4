const pers = require('./closures_person');

var person1 = new pers('Casper', 30);
console.log(person1);
person1.setAge(31);
console.log(person1.getInfo());

var person2 = new pers('Claus', 53);
person2.setName('Lotte');
console.log(person2.getInfo());