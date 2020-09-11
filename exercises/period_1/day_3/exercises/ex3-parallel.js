const fetch = require("node-fetch");
var now = require("performance-now")

const URL = "https://swapi.dev/api/people/";
 
function fetchPerson(url){
    const personPromise = fetch(url).then(res => res.json());
    return personPromise;
}

async function printNames() {
    var start = now()  
    console.log("Before");
    
    const promise1 = fetchPerson(URL+'1');
    const promise2 = fetchPerson(URL+'2');
    let promises = [promise1, promise2]
    let persons = await Promise.all(promises)

    persons.map(person => {
        console.log(person.name);
    })

    console.log("After all");
    var end = now()
    console.log(start.toFixed(3)) // the number of milliseconds the current node process is running
    console.log((start-end).toFixed(3)) // ~ 0.002 on my system 
}



printNames()
