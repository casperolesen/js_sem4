/*
Examples to show that:
- Function declarations are completely hoisted
- var declarations are also hoisted, but not assignments made with them 
*/

f1(); // working because of hoisting 
f2(); // error: f2 is not a function. only the declaration is hoisted - but it's not assigned to the function

function f1() {
    console.log("I'm f1");
}

var f2 = function () {
    console.log("Yes, but I'm f2");
};
