// a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
var all= ["Lars", "Peter", "Jan", "Bo"];

var join_comma = all.join(',');
console.log(join_comma);

var join_space = all.join(' ');
console.log(join_space);

var join_hashtag = all.join('#');
console.log(join_hashtag);


// b) Create a reducer function that will return the sum (105) of all values in numbers
let numbers = [2, 3, 67, 33];

let numbers_sum = numbers.reduce((acc, curVal) => {
    let temp = acc + curVal;
    return temp;
}, 0);

console.log(`Sum of all values in [numbers]: ${numbers_sum}`);


// c) Create a reducer function that will return the average age of all members.
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];

let members_average_age = members.reduce((acc, curVal, idx, arr) => {
    let age_avg = acc + curVal.age;
    age_avg = idx < arr.length-1 ? age_avg : age_avg / arr.length; // divide by arr length when reached last value in arr
    return age_avg; 
}, 0);

console.log(`Average age of all members in [members]: ${members_average_age}`);


// c) Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

let votes_count = votes.reduce((acc, curVal, idx, arr) => {
    if (curVal in acc) {
        acc[curVal]++;
    } else {
        acc[curVal]=1;
    }
    return acc;
}, {});

console.log("Votes total count:");
console.log(votes_count);