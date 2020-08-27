function hoisting1() {
    console.log("Value of myCoolObject: " + myCoolObject);

    if (!myCoolObject) {
        var myCoolObject = {value: "Wau, I'm cool"};
        console.log(myCoolObject.value);
    }
}
hoisting1();