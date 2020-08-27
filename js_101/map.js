/*
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


/*
The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
*/

let numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
    return Math.sqrt(num);
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]


/*
The following code takes an array of objects and creates a new array containing the newly reformatted objects.
*/

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]