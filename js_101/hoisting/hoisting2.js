function hoisting2() {
    f1();
    f2();

    function f1() {
        console.log("I'm f1");
    }

    var f2 = function () {
        console.log("Yes, but I'm f2");
    };
}
hoisting2();