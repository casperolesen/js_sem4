import fetch from 'node-fetch';
import "core-js/proposals/promise-any";

let myPromise = (timeout) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (timeout == 0) {
            reject("rejected!")
        }
        resolve(timeout)
    }, timeout);
})

let promises = [myPromise(1000), myPromise(2000), myPromise(0), myPromise(3000)]

Promise.all(promises)
.then(res => console.log(res))
.catch(err => console.log(err))

Promise.any(promises)
.then(res => console.log(res))