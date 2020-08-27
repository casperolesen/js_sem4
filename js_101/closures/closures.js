function makeFunc() {
    var name = "Mozilla";

    function logName() {
        console.log(name);
    }

    return logName;
}

var f = makeFunc();
f();