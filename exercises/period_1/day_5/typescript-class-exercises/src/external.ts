import * as _ from "lodash";
// remember npm install lodash
// remember npm install @types/lodash

let numbers:number[] = [1,2,3,4,5]
// or
//let numbers = [1,2,3]

let shuffeld = _.shuffle(numbers);

let reversed:Array<number> = _.reverse(shuffeld);

console.log(reversed);
