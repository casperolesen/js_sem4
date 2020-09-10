const getSecureRandom = require('./ex1-crypto-module');

// using plain promises
getSecureRandom([48, 40, 32, 24, 16, 8])
.then(randoms => console.log(randoms))

// using async/await