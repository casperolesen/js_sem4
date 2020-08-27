/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


/*
The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
*/

function isBigEnough(value) {
    return value >= 10;
};

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]