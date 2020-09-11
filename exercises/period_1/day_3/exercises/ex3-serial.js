const fetch = require("node-fetch");
var now = require("performance-now")

const URL = "https://swapi.dev/api/people/";
 
async function fetchPerson(url){
    const person = await fetch(url).then(res => res.json());
    return person;
}

async function printNames() {
    var start = now()  
    console.log("Before");
    const person1 = await fetchPerson(URL+'1');
    const person2 = await fetchPerson(URL+'2');
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var end = now()
    console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log((start-end).toFixed(3)) // ~ 0.002 on my system 
}



printNames()
