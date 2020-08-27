function hoisting() {
  const a = true;
  if(a) {
      var hasBeenInA = true;
      console.log("In A");
  }
  if(hasBeenInA) {
    console.log("In B");
  }  
};
hoisting();