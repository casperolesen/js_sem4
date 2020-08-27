/*
ORIGINAL

console.log("Before Loop");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(`Value of i: ${i}`);
    }, 1000);
}
console.log("After Loop. i = " +i);

*/

/* 
STILL USING VAR

console.time('myTimer');
console.log("Before Loop");

function loopDone() {
    console.log("After Loop. i = " +i);
}

for (var i = 1; i < 6; i++) {
    console.log(`Loop Number: ${i}`);
    function timer() { // create a unique function (scope) each time (not needed with let)
        var a = i;
        setTimeout(() => {
            console.log(`Value of i: ${a}`);
            if(a === 5) { // check when the last statement has been logged
                setTimeout(loopDone, 1000);
            }
        }, a * 1000);
    }
    timer();
}

console.timeEnd('myTimer'); 
*/


console.log("Before Loop");
for (let i = 1; i < 6; i++) {
    setTimeout(() => {
        console.log(`Value of i: ${i}`);
        if (i === 5) {
            setTimeout(() => {
                console.log("After Loop. i = " +i);
            }, 1000);  
        }
    }, i * 1000);
}


/*
setTimeout() is an asynchronous web API, with a callback,
and goes through the event loop.
*/

/*
Declaring a variable with var creates a variable
that is also available in its parent scope
(in this case, the global scope).
*/

