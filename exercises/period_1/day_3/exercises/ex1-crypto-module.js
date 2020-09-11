const crypto = require('crypto')

let makeSecureRandom = (size) => new Promise(function (resolve, reject) {
    crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(new Error(err))
        } else {
            let secureHex = buffer.toString('hex');
            resolve({ length: size, random: secureHex })
        }
    })
})

let getSecureRandom = (sizes) => {
    let promises = sizes.map(makeSecureRandom)
    return Promise.all(promises);
}

module.exports = getSecureRandom;