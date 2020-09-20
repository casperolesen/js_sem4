const getSecureRandom = require('./ex1-crypto-module');

// using plain promises
let plain = getSecureRandom([48, 40, 32, 24, 16, 8])
    .then(randoms => console.log(randoms))
    .catch(err => console.log(err))

// using async/await
let async_await = async () => {
    try {
        let res = await getSecureRandom([48, 40, 32, 24, 16, 8])
        console.log(res);
    } catch (err) {
        console.log(err);
    }

}

async_await()